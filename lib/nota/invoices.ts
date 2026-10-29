import "server-only";
import { randomBytes } from "node:crypto";
import { Prisma } from "@/lib/generated/prisma/client";
import { db } from "./db";
import {
  invoiceSchema,
  paymentSchema,
  totals,
  mask,
  type InvoiceDTO,
  type PublicInvoice,
  settingsSchema,
} from "./model";
import { NotaError } from "./errors";
export { NotaError } from "./errors";

const include = {
  items: { orderBy: { position: "asc" as const } },
  payments: { orderBy: { createdAt: "asc" as const } },
  history: { orderBy: { createdAt: "desc" as const } },
};
type Row = Prisma.InvoiceGetPayload<{ include: typeof include }>;
function dto(row: Row): InvoiceDTO {
  return JSON.parse(JSON.stringify(row));
}
export async function listInvoices(
  query: string,
  status: string,
  page: number,
  brandId = "",
) {
  const match = /^(?:([A-Za-z][A-Za-z0-9]{1,7})-)?(\d+)$/.exec(query);
  const serial =
    match && Number(match[2]) <= 2147483647 ? Number(match[2]) : null;
  const where: Prisma.InvoiceWhereInput = {
    ...(brandId ? { brandId } : {}),
    ...(status ? { status } : {}),
    ...(query
      ? {
          OR: [
            { customerName: { contains: query, mode: "insensitive" } },
            { phone: { contains: query } },
            { device: { contains: query, mode: "insensitive" } },
            ...(serial !== null
              ? [
                  {
                    brandNumber: serial,
                    ...(match?.[1]
                      ? { numberPrefix: match[1].toUpperCase() }
                      : {}),
                  },
                ]
              : []),
          ],
        }
      : {}),
  };
  const filter = Prisma.sql`${brandId ? Prisma.sql`i."brandId" = ${brandId}` : Prisma.sql`TRUE`} AND ${status ? Prisma.sql`i."status" = ${status}` : Prisma.sql`TRUE`} AND ${query ? Prisma.sql`(i."customerName" ILIKE ${`%${query}%`} OR i."phone" LIKE ${`%${query}%`} OR i."device" ILIKE ${`%${query}%`} ${serial !== null ? Prisma.sql`OR (i."brandNumber" = ${serial} ${match?.[1] ? Prisma.sql`AND i."numberPrefix" = ${match[1].toUpperCase()}` : Prisma.empty})` : Prisma.empty})` : Prisma.sql`TRUE`}`;
  return db().$transaction(async (tx) => {
    const rows = await tx.invoice.findMany({
      where,
      include,
      orderBy: { createdAt: "desc" },
      take: 25,
      skip: (page - 1) * 25,
    });
    const [summary] = await tx.$queryRaw<
      { count: bigint; paid: bigint; balance: bigint }[]
    >(Prisma.sql`
      SELECT COUNT(*)::bigint AS count, COALESCE(SUM(p.paid),0)::bigint AS paid,
      COALESCE(SUM(li.subtotal-i."discount"-p.paid),0)::bigint AS balance
      FROM "nota"."Invoice" i
      CROSS JOIN LATERAL (SELECT COALESCE(SUM("quantity"::bigint*"price"),0) AS subtotal FROM "nota"."InvoiceItem" WHERE "invoiceId"=i.id) li
      CROSS JOIN LATERAL (SELECT COALESCE(SUM("amount"),0) AS paid FROM "nota"."Payment" WHERE "invoiceId"=i.id) p
      WHERE ${filter}`);
    return {
      invoices: rows.map(dto),
      count: Number(summary.count),
      page,
      summary: { paid: Number(summary.paid), balance: Number(summary.balance) },
    };
  });
}
export async function getInvoice(id: string) {
  const row = await db().invoice.findUnique({ where: { id }, include });
  if (!row) throw new NotaError("Nota tidak ditemukan", 404);
  return dto(row);
}
export async function getPublicInvoice(
  token: string,
): Promise<PublicInvoice | null> {
  if (!/^[A-Za-z0-9_-]{43}$/.test(token)) return null;
  const row = await db().invoice.findUnique({ where: { token }, include });
  if (!row) return null;
  return {
    number: row.number,
    brandId: row.brandId,
    brandNumber: row.brandNumber,
    numberPrefix: row.numberPrefix,
    brandSnapshot: settingsSchema.parse(row.brandSnapshot),
    customerName: row.customerName,
    phone: mask(row.phone),
    device: row.device,
    identifier: mask(row.identifier),
    complaint: row.complaint,
    action: row.action,
    warranty: row.warranty,
    notes: row.notes,
    status: row.status,
    discount: row.discount,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
    items: row.items.map((i) => ({
      label: i.label,
      quantity: i.quantity,
      price: i.price,
    })),
    payments: row.payments.map((p) => ({
      id: p.id,
      amount: p.amount,
      method: p.method,
      note: "",
      createdAt: p.createdAt.toISOString(),
    })),
    history: row.history
      .filter((h) => h.event === "Nota dibuat" || h.event.startsWith("Status:"))
      .map((h) => ({
        id: h.id,
        status: h.status,
        event: h.status,
        createdAt: h.createdAt.toISOString(),
      })),
  };
}
export async function saveInvoice(body: unknown, id?: string) {
  const parsed = invoiceSchema.parse(body);
  const { items, version, deposit, paymentMethod, ...data } = parsed;
  if (!id) {
    return db().$transaction(async (tx) => {
      const exists = await tx.brand.findUnique({
        where: { id: data.brandId },
        select: { id: true },
      });
      if (!exists) throw new NotaError("Brand tidak ditemukan", 404);
      const brand = await tx.brand.update({
        where: { id: data.brandId },
        data: { counter: { increment: 1 } },
      });
      const snapshot = settingsSchema.parse(brand.data);
      if (!snapshot.statuses.includes(data.status))
        throw new NotaError("Status tidak tersedia pada brand ini");
      const row = await tx.invoice.create({
        data: {
          ...data,
          brandNumber: brand.counter,
          numberPrefix: brand.prefix,
          brandSnapshot: snapshot,
          token: randomBytes(32).toString("base64url"),
          items: { create: items.map((i, position) => ({ ...i, position })) },
          payments: deposit
            ? {
                create: {
                  amount: deposit,
                  method: paymentMethod || "Tunai",
                  note: "DP awal",
                },
              }
            : undefined,
          history: { create: { status: data.status, event: "Nota dibuat" } },
        },
        include,
      });
      return dto(row);
    });
  }
  if (!version) throw new NotaError("Versi nota diperlukan");
  return db().$transaction(async (tx) => {
    const locked = await tx.invoice.updateMany({
      where: { id, version },
      data: { version: { increment: 1 } },
    });
    if (!locked.count)
      throw new NotaError(
        "Nota sudah berubah. Muat ulang sebelum menyimpan.",
        409,
      );
    const previous = await tx.invoice.findUniqueOrThrow({
      where: { id },
      include,
    });
    if (data.brandId !== previous.brandId)
      throw new NotaError(
        "Brand penerbit nota yang sudah tersimpan tidak dapat dipindahkan",
      );
    const brand = await tx.brand.findUniqueOrThrow({
      where: { id: previous.brandId },
    });
    if (
      data.status !== previous.status &&
      !settingsSchema.parse(brand.data).statuses.includes(data.status)
    )
      throw new NotaError("Status tidak tersedia pada brand ini");
    if (totals({ ...data, items, payments: previous.payments }).balance < 0)
      throw new NotaError(
        "Total baru lebih kecil dari pembayaran yang sudah diterima",
      );
    const row = await tx.invoice.update({
      where: { id },
      data: {
        ...data,
        items: {
          deleteMany: {},
          create: items.map((i, position) => ({ ...i, position })),
        },
        history: {
          create: {
            status: data.status,
            event:
              previous.status === data.status
                ? "Rincian nota diperbarui"
                : `Status: ${previous.status} → ${data.status}`,
          },
        },
      },
      include,
    });
    return dto(row);
  });
}
export async function addPayment(id: string, body: unknown) {
  const { version, ...payment } = paymentSchema.parse(body);
  return db().$transaction(async (tx) => {
    const locked = await tx.invoice.updateMany({
      where: { id, version },
      data: { version: { increment: 1 } },
    });
    if (!locked.count)
      throw new NotaError(
        "Nota sudah berubah. Muat ulang sebelum mencatat pembayaran.",
        409,
      );
    const row = await tx.invoice.findUniqueOrThrow({ where: { id }, include });
    if (payment.amount > totals(row).balance)
      throw new NotaError("Pembayaran melebihi sisa tagihan");
    await tx.payment.create({ data: { ...payment, invoiceId: id } });
    await tx.invoiceHistory.create({
      data: {
        invoiceId: id,
        status: row.status,
        event: `Pembayaran Rp${payment.amount.toLocaleString("id-ID")} (${payment.method})`,
      },
    });
    return dto(await tx.invoice.findUniqueOrThrow({ where: { id }, include }));
  });
}
