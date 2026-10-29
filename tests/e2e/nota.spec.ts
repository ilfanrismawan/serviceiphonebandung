import { test, expect, type APIRequestContext } from "@playwright/test";
import { PDFDocument } from "pdf-lib";
const origin = "http://localhost:3107";
const headers = { Origin: origin };
async function post(request: APIRequestContext, path: string, data: unknown) {
  return request.post(`/api/nota-admin/${path}`, { data, headers });
}

test("nota: autentikasi, transaksi, privasi, PDF, cetak dan pengaturan", async ({
  page,
  request,
  browser,
}, testInfo) => {
  expect((await request.get("/api/nota-admin/invoices")).status()).toBe(401);
  for (const route of ["/", "/harga", "/kontak", "/layanan", "/blog"])
    expect((await request.get(route)).status()).toBe(200);
  expect(
    (
      await request.post("/api/nota-admin/login", {
        data: { passcode: "121413" },
        headers: { Origin: "https://example.org" },
      })
    ).status(),
  ).toBe(403);
  expect((await post(request, "login", { passcode: "000000" })).status()).toBe(
    401,
  );
  await page.goto("/admin");
  await page.getByPlaceholder("Masukkan passcode").fill("121413");
  await page.getByRole("button", { name: "Masuk ke ruang admin" }).click();
  await expect(
    page.getByRole("heading", { name: "Setiap brand, tercatat." }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Buat nota", exact: false })
    .first()
    .click();
  await page
    .getByLabel("Nama customer *", { exact: true })
    .fill("Customer Uji Nota");
  await page.getByLabel("WhatsApp customer *").fill("081234567890");
  await page.getByLabel("Model perangkat *").fill("iPhone 13 Pro");
  await page.getByLabel("Nomor seri / IMEI").fill("123456789012345");
  await page.getByLabel("Keluhan customer *").fill("Baterai cepat habis");
  await page
    .getByLabel("Catatan internal")
    .fill("RAHASIA-TEKNISI-JANGAN-BOCOR");
  await page.getByLabel("Harga (Rp)").fill("500000");
  await page.getByLabel("Diskon (Rp)").fill("50000");
  await page.getByLabel("DP / pembayaran awal (Rp)").fill("100000");
  await page.getByRole("button", { name: "Buat & simpan nota" }).click();
  await expect(
    page.getByText("Nota berhasil disimpan.", { exact: false }),
  ).toBeVisible();
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({
    path: testInfo.outputPath("admin-desktop.png"),
    fullPage: true,
  });
  const publicUrl = await page
    .getByRole("link", { name: "Lihat nota & cetak" })
    .getAttribute("href");
  expect(publicUrl).toMatch(/\/nota\/[A-Za-z0-9_-]{43}$/);
  const adminContext = page.context().request;
  const originalSettings = await (
    await adminContext.get("/api/nota-admin/settings")
  ).json();
  const list = await (
    await adminContext.get("/api/nota-admin/invoices?q=Customer%20Uji%20Nota")
  ).json();
  const saved = list.invoices[0];
  expect(saved.discount).toBe(50000);
  expect(saved.payments[0].amount).toBe(100000);
  const payload = { ...saved, version: saved.version, status: "Dikerjakan" };
  const concurrent = await Promise.all([
    post(adminContext, `invoices/${saved.id}`, payload),
    post(adminContext, `invoices/${saved.id}`, payload),
  ]);
  expect(concurrent.map((r) => r.status()).sort()).toEqual([200, 409]);
  const updated = await (
    await adminContext.get(`/api/nota-admin/invoices/${saved.id}`)
  ).json();
  expect(
    (
      await post(adminContext, `invoices/${saved.id}/payments`, {
        amount: 350001,
        method: "Tunai",
        note: "",
        version: updated.version,
      })
    ).status(),
  ).toBe(400);
  const paid = await post(adminContext, `invoices/${saved.id}/payments`, {
    amount: 350000,
    method: "Transfer",
    note: "Catatan internal pembayaran",
    version: updated.version,
  });
  expect(paid.status()).toBe(200);
  const customer = await browser.newContext();
  const receipt = await customer.newPage();
  const external: string[] = [];
  receipt.on("request", (r) => {
    if (/google|analytics|gtag/i.test(r.url())) external.push(r.url());
  });
  await receipt.goto(publicUrl!);
  await expect(
    receipt.getByText("Dikerjakan", { exact: true }).first(),
  ).toBeVisible();
  await expect(receipt.getByText("Lunas", { exact: true })).toBeVisible();
  const html = await receipt.content();
  expect(html).not.toContain("RAHASIA-TEKNISI-JANGAN-BOCOR");
  expect(html).not.toContain("123456789012345");
  expect(html).not.toContain("081234567890");
  expect(html).not.toContain("Catatan internal pembayaran");
  expect(external).toEqual([]);
  await expect(receipt.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/,
  );
  await expect(receipt.getByAltText("QR tautan nota servis")).toBeVisible();
  for (const paper of ["a4", "80", "58"]) {
    const pdf = await request.get(`${publicUrl}/pdf?paper=${paper}`);
    expect(pdf.status()).toBe(200);
    expect(pdf.headers()["content-type"]).toBe("application/pdf");
    expect((await pdf.body()).subarray(0, 5).toString()).toBe("%PDF-");
  }
  await receipt.screenshot({
    path: testInfo.outputPath("customer-desktop.png"),
    fullPage: true,
  });
  await receipt.setViewportSize({ width: 390, height: 844 });
  expect(
    await receipt
      .locator(".nota-table-wrap")
      .evaluate((el) => el.scrollWidth <= el.clientWidth),
  ).toBe(true);
  await receipt.screenshot({
    path: testInfo.outputPath("customer-mobile.png"),
    fullPage: true,
  });
  expect(
    await receipt.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await receipt.emulateMedia({ media: "print" });
  await receipt.pdf({
    path: testInfo.outputPath("receipt-print-a4.pdf"),
    format: "A4",
    printBackground: true,
  });
  expect((await request.get("/nota/invalid-token")).status()).toBe(404);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Kembali ke daftar" }).click();
  await page.screenshot({
    path: testInfo.outputPath("admin-mobile.png"),
    fullPage: true,
  });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page
    .getByRole("button", { name: "Kelola brand", exact: false })
    .click();
  await page.getByRole("button", { name: "Atur identitas" }).first().click();
  await page.getByLabel("Nama toko *").fill("Toko Uji Servis");
  await page
    .getByRole("button", { name: "Simpan pengaturan", exact: true })
    .click();
  await expect(page.getByText("Pengaturan berhasil disimpan.")).toBeVisible();
  expect(
    (await post(adminContext, "settings", originalSettings)).status(),
  ).toBe(200);
  await page
    .getByRole("button", { name: "Kelola brand", exact: false })
    .click();
  await page
    .getByRole("button", { name: "Tambah brand", exact: false })
    .click();
  await page.getByLabel("Kode nomor nota *").fill("DGC");
  await page.getByLabel("Nama toko *").fill("DigiCare Uji");
  await page.getByLabel("WhatsApp toko *").fill("081200009999");
  await page
    .getByLabel("Rekening / petunjuk pembayaran")
    .fill("Bank A - rekening khusus DigiCare");
  await page
    .getByRole("button", { name: "Simpan pengaturan", exact: true })
    .click();
  await expect(
    page.getByText("Pengaturan brand berhasil disimpan.", { exact: false }),
  ).toBeVisible();
  const profiles = await (
    await adminContext.get("/api/nota-admin/brands")
  ).json();
  const digi = profiles.find((b: { prefix: string }) => b.prefix === "DGC");
  expect(digi).toBeTruthy();
  expect((await post(adminContext, "brands", { ...digi })).status()).toBe(409);
  const draft = {
    ...saved,
    brandId: digi.id,
    customerName: "Customer Brand DGC",
    deposit: 0,
    version: undefined,
  };
  const createdResponses = await Promise.all([
    post(adminContext, "invoices", draft),
    post(adminContext, "invoices", draft),
  ]);
  expect(createdResponses.map((r) => r.status())).toEqual([201, 201]);
  const created = await Promise.all(createdResponses.map((r) => r.json()));
  expect(created.map((i) => i.brandNumber).sort()).toEqual([1, 2]);
  expect(created.every((i) => i.numberPrefix === "DGC")).toBe(true);
  const sibNext = await (
    await post(adminContext, "invoices", {
      ...draft,
      brandId: "sib",
      customerName: "Customer Brand SIB",
    })
  ).json();
  expect(sibNext.brandNumber).toBe(2);
  expect(sibNext.numberPrefix).toBe("SIB");
  expect(
    (
      await post(adminContext, `invoices/${created[0].id}`, {
        ...created[0],
        brandId: "sib",
      })
    ).status(),
  ).toBe(400);
  const profileNow = await (
    await adminContext.get(`/api/nota-admin/brands/${digi.id}`)
  ).json();
  expect(
    (
      await post(adminContext, `brands/${digi.id}`, {
        ...profileNow,
        prefix: "OTHER",
      })
    ).status(),
  ).toBe(400);
  const changedProfile = await post(adminContext, `brands/${digi.id}`, {
    ...profileNow,
    name: "DigiCare Baru",
    bank: "Bank B - rekening baru",
  });
  expect(changedProfile.status()).toBe(200);
  expect(
    (await post(adminContext, `brands/${digi.id}`, { ...profileNow })).status(),
  ).toBe(409);
  await receipt.emulateMedia({ media: "screen" });
  const digiUrl = `${origin}/nota/${created[0].token}`;
  await receipt.goto(digiUrl);
  await expect(receipt).toHaveTitle(/DigiCare Uji/);
  await expect(
    receipt.getByRole("heading", { name: "DigiCare Uji", exact: true }),
  ).toBeVisible();
  await expect(
    receipt.getByText("Bank A - rekening khusus DigiCare", { exact: true }),
  ).toBeVisible();
  await expect(
    receipt.getByText("Bank B - rekening baru", { exact: true }),
  ).toHaveCount(0);
  const digiPdf = await request.get(`${digiUrl}/pdf?paper=a4`);
  expect((await PDFDocument.load(await digiPdf.body())).getAuthor()).toBe(
    "DigiCare Uji",
  );
  const fresh = await (await post(adminContext, "invoices", draft)).json();
  expect(fresh.brandNumber).toBe(3);
  expect(fresh.brandSnapshot.name).toBe("DigiCare Baru");
  const filtered = await (
    await adminContext.get(`/api/nota-admin/invoices?brandId=${digi.id}`)
  ).json();
  expect(filtered.count).toBe(3);
  expect(filtered.summary.balance).toBe(1350000);
  expect(filtered.summary.paid).toBe(0);
  expect(
    filtered.invoices.every((i: { brandId: string }) => i.brandId === digi.id),
  ).toBe(true);
  const searched = await (
    await adminContext.get("/api/nota-admin/invoices?q=DGC-000001")
  ).json();
  expect(searched.count).toBe(1);
  expect(searched.invoices[0].brandId).toBe(digi.id);
  await page.getByLabel("Pilih brand", { exact: true }).selectOption(digi.id);
  await expect(page.locator(".nota-table tbody tr")).toHaveCount(3);
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.screenshot({
    path: testInfo.outputPath("multi-brand-dashboard.png"),
    fullPage: true,
  });
  await receipt.screenshot({
    path: testInfo.outputPath("brand-customer-mobile.png"),
    fullPage: true,
  });
  await page.getByRole("button", { name: "Pengaturan", exact: false }).click();
  await page.getByLabel("Passcode saat ini").fill("121413");
  await page.getByLabel("Passcode baru ·").fill("654321");
  await page.getByLabel("Ulangi passcode baru").fill("654321");
  await page.getByRole("button", { name: "Simpan passcode baru" }).click();
  await expect(page.getByPlaceholder("Masukkan passcode")).toBeVisible();
  expect((await adminContext.get("/api/nota-admin/invoices")).status()).toBe(
    401,
  );
  expect((await post(request, "login", { passcode: "654321" })).status()).toBe(
    200,
  );
  // Restore the initial passcode and settings for a repeatable dedicated test database.
  expect(
    (
      await post(request, "passcode", { current: "654321", next: "121413" })
    ).status(),
  ).toBe(200);
  let blocked = false;
  for (let n = 0; n < 9; n++) {
    const response = await post(request, "login", { passcode: "000000" });
    if (response.status() === 429) {
      blocked = true;
      break;
    }
    expect(response.status()).toBe(401);
  }
  expect(blocked).toBe(true);
  await customer.close();
});
