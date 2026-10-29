import "server-only";
import { Prisma } from "@/lib/generated/prisma/client";
import { db } from "./db";
import { brandSchema, settingsSchema, type BrandProfile } from "./model";
import { NotaError } from "./errors";

type BrandRow = {
  id: string;
  prefix: string;
  version: number;
  counter: number;
  data: Prisma.JsonValue;
};
export function brandProfile(row: BrandRow): BrandProfile {
  return {
    ...settingsSchema.parse(row.data),
    id: row.id,
    prefix: row.prefix,
    version: row.version,
    counter: row.counter,
  };
}
export async function listBrands() {
  return (await db().brand.findMany({ orderBy: { createdAt: "asc" } })).map(
    brandProfile,
  );
}
export async function getBrand(id: string) {
  const row = await db().brand.findUnique({ where: { id } });
  if (!row) throw new NotaError("Brand tidak ditemukan", 404);
  return brandProfile(row);
}
export async function saveBrand(body: unknown, id?: string) {
  const { prefix, version, ...data } = brandSchema.parse(body);
  try {
    if (!id)
      return brandProfile(await db().brand.create({ data: { prefix, data } }));
    if (!version) throw new NotaError("Versi pengaturan diperlukan");
    return await db().$transaction(async (tx) => {
      const locked = await tx.brand.updateMany({
        where: { id, version },
        data: { version: { increment: 1 } },
      });
      if (!locked.count)
        throw new NotaError(
          "Pengaturan brand sudah berubah. Muat ulang sebelum menyimpan.",
          409,
        );
      const row = await tx.brand.findUniqueOrThrow({ where: { id } });
      if (row.counter && row.prefix !== prefix)
        throw new NotaError(
          "Kode brand tidak dapat diganti setelah nota pertama diterbitkan",
        );
      const used = await tx.invoice.findFirst({
        where: { brandId: id, status: { notIn: data.statuses } },
        select: { status: true },
      });
      if (used)
        throw new NotaError(
          `Status "${used.status}" masih dipakai nota brand ini.`,
        );
      return brandProfile(
        await tx.brand.update({ where: { id }, data: { prefix, data } }),
      );
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    )
      throw new NotaError("Kode brand sudah dipakai. Pilih kode lain.", 409);
    throw error;
  }
}
