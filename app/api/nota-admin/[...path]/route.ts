import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ZodError, z } from "zod";
import {
  authenticated,
  login,
  COOKIE_NAME,
  SESSION_SECONDS,
  digest,
  hashPasscode,
  verifyPasscode,
} from "@/lib/nota/auth";
import { db } from "@/lib/nota/db";
import { getSettings } from "@/lib/nota/settings";
import { settingsSchema } from "@/lib/nota/model";
import { getBrand, listBrands, saveBrand } from "@/lib/nota/brands";
import {
  listInvoices,
  getInvoice,
  saveInvoice,
  addPayment,
  NotaError,
} from "@/lib/nota/invoices";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
type Context = { params: Promise<{ path: string[] }> };
function json(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
async function body(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json"))
    throw new NotaError("Gunakan JSON", 415);
  if (Number(request.headers.get("content-length")) > 400_000)
    throw new NotaError("Data terlalu besar", 413);
  const text = await request.text();
  if (text.length > 400_000) throw new NotaError("Data terlalu besar", 413);
  try {
    return JSON.parse(text);
  } catch {
    throw new NotaError("Data tidak valid");
  }
}
async function handle(request: Request, context: Context) {
  try {
    const { path } = await context.params;
    const route = path.join("/");
    if (request.method === "POST") {
      const origin = request.headers.get("origin");
      if (!origin || new URL(origin).host !== request.headers.get("host"))
        return json({ error: "Asal permintaan tidak valid" }, 403);
    }
    if (route === "session" && request.method === "GET") {
      if (!process.env.DATABASE_URL)
        return json({ authenticated: false, setupRequired: true });
      return json({ authenticated: await authenticated() });
    }
    if (route === "login" && request.method === "POST") {
      const { passcode } = z
        .object({
          passcode: z
            .string()
            .regex(/^\d{6,12}$/, "Masukkan passcode 6–12 digit"),
        })
        .parse(await body(request));
      const result = await login(passcode, request);
      if (result.error) return json({ error: result.error }, result.status);
      const response = json({ ok: true });
      response.cookies.set(COOKIE_NAME, result.token!, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: SESSION_SECONDS,
      });
      return response;
    }
    if (!(await authenticated()))
      return json({ error: "Sesi berakhir. Silakan masuk kembali." }, 401);
    if (route === "logout" && request.method === "POST") {
      const token = (await cookies()).get(COOKIE_NAME)?.value;
      if (token)
        await db().adminSession.deleteMany({
          where: { tokenHash: digest(token) },
        });
      const response = json({ ok: true });
      response.cookies.delete(COOKIE_NAME);
      return response;
    }
    if (route === "brands") {
      if (request.method === "GET") return json(await listBrands());
      if (request.method === "POST")
        return json(await saveBrand(await body(request)), 201);
    }
    if (path[0] === "brands" && path.length === 2) {
      if (request.method === "GET") return json(await getBrand(path[1]));
      if (request.method === "POST")
        return json(await saveBrand(await body(request), path[1]));
    }
    if (route === "settings") {
      if (request.method === "GET") return json(await getSettings());
      if (request.method === "POST") {
        const data = settingsSchema.parse(await body(request));
        const brand = await getBrand("sib");
        await saveBrand(
          { ...data, prefix: brand.prefix, version: brand.version },
          "sib",
        );
        return json(data);
      }
    }
    if (route === "passcode" && request.method === "POST") {
      const { current, next } = z
        .object({
          current: z.string().regex(/^\d{6,12}$/),
          next: z
            .string()
            .regex(/^\d{6,12}$/, "Passcode baru harus 6–12 digit"),
        })
        .parse(await body(request));
      // Reuse persistent login throttling before verifying the current passcode.
      const attempt = await login(current, request);
      if (attempt.error) return json({ error: attempt.error }, attempt.status);
      const credential = await db().adminCredential.findUniqueOrThrow({
        where: { id: "admin" },
      });
      if (!verifyPasscode(current, credential.passcodeHash))
        throw new NotaError("Passcode lama tidak sesuai", 401);
      await db().$transaction([
        db().adminCredential.update({
          where: { id: "admin" },
          data: { passcodeHash: hashPasscode(next) },
        }),
        db().adminSession.deleteMany({}),
      ]);
      const response = json({ ok: true });
      response.cookies.delete(COOKIE_NAME);
      return response;
    }
    if (route === "invoices") {
      if (request.method === "GET") {
        const p = new URL(request.url).searchParams;
        const page = Math.max(1, Math.min(10000, Number(p.get("page")) || 1));
        return json(
          await listInvoices(
            (p.get("q") || "").slice(0, 100),
            (p.get("status") || "").slice(0, 200),
            Math.floor(page),
            (p.get("brandId") || "").slice(0, 100),
          ),
        );
      }
      if (request.method === "POST")
        return json(await saveInvoice(await body(request)), 201);
    }
    if (path[0] === "invoices" && path.length === 2) {
      if (request.method === "GET") return json(await getInvoice(path[1]));
      if (request.method === "POST")
        return json(await saveInvoice(await body(request), path[1]));
    }
    if (
      path[0] === "invoices" &&
      path[2] === "payments" &&
      path.length === 3 &&
      request.method === "POST"
    )
      return json(await addPayment(path[1], await body(request)));
    return json({ error: "Tidak ditemukan" }, 404);
  } catch (error) {
    if (error instanceof ZodError)
      return json(
        { error: error.issues.map((i) => i.message).join(". ") },
        400,
      );
    if (error instanceof NotaError)
      return json({ error: error.message }, error.status);
    console.error(
      "Nota API:",
      error instanceof Error ? error.name : "Unknown error",
    );
    return json(
      {
        error:
          "Database belum siap atau sedang tidak dapat diakses. Periksa koneksi dan migrasi database.",
      },
      503,
    );
  }
}
export const GET = handle;
export const POST = handle;
