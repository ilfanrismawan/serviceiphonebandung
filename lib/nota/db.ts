import "server-only";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma/client";

const globalDb = globalThis as unknown as { notaDb?: PrismaClient };
export function db() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_NOT_CONFIGURED");
  // A dev server may still hold the generated client from before the Brand model existed.
  if (globalDb.notaDb && !globalDb.notaDb.brand) {
    void globalDb.notaDb.$disconnect();
    globalDb.notaDb = undefined;
  }
  if (!globalDb.notaDb)
    globalDb.notaDb = new PrismaClient({
      adapter: new PrismaPg({
        connectionString: process.env.DATABASE_URL,
        max: 5,
        connectionTimeoutMillis: 8000,
      }),
    });
  return globalDb.notaDb;
}
