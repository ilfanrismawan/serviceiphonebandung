BEGIN;
-- Freeze legacy issuance while the per-brand counter and snapshots are backfilled.
LOCK TABLE "nota"."Invoice" IN SHARE ROW EXCLUSIVE MODE;
CREATE TABLE "nota"."Brand" (
  "id" TEXT NOT NULL,
  "prefix" TEXT NOT NULL,
  "counter" INTEGER NOT NULL DEFAULT 0,
  "version" INTEGER NOT NULL DEFAULT 1,
  "data" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Brand_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "Brand_counter_check" CHECK ("counter" >= 0),
  CONSTRAINT "Brand_prefix_check" CHECK ("prefix" ~ '^[A-Z][A-Z0-9]{1,7}$')
);
CREATE UNIQUE INDEX "Brand_prefix_key" ON "nota"."Brand"("prefix");

-- Preserve the existing shop profile and every legacy invoice number.
INSERT INTO "nota"."Brand" ("id", "prefix", "counter", "data", "updatedAt")
SELECT 'sib', 'SIB', COALESCE((SELECT MAX("number") FROM "nota"."Invoice"), 0),
  COALESCE((SELECT "data" FROM "nota"."ShopSettings" WHERE "id" = 'shop'),
    '{"name":"Service iPhone Bandung","address":"Jl. Dipati Ukur No.86 Lt 2, Lebakgede, Bandung","phone":"6287860002347","logoUrl":"","color":"#0071e3","bank":"","warranty":"","footer":"Terima kasih telah mempercayakan perangkat Anda kepada kami.","statuses":["Diterima","Dicek","Menunggu persetujuan","Dikerjakan","Selesai","Diambil","Dibatalkan"],"services":["Pengecekan perangkat","Ganti baterai","Ganti LCD","Perbaikan mesin","Perbaikan port charger"],"paper":"80"}'::jsonb),
  CURRENT_TIMESTAMP;

ALTER TABLE "nota"."Invoice" ADD COLUMN "brandId" TEXT,
  ADD COLUMN "brandNumber" INTEGER,
  ADD COLUMN "numberPrefix" TEXT,
  ADD COLUMN "brandSnapshot" JSONB;
UPDATE "nota"."Invoice" SET "brandId" = 'sib', "brandNumber" = "number", "numberPrefix" = 'SIB',
  "brandSnapshot" = (SELECT "data" FROM "nota"."Brand" WHERE "id" = 'sib');
ALTER TABLE "nota"."Invoice" ALTER COLUMN "brandId" SET NOT NULL,
  ALTER COLUMN "brandNumber" SET NOT NULL,
  ALTER COLUMN "numberPrefix" SET NOT NULL,
  ALTER COLUMN "brandSnapshot" SET NOT NULL;
CREATE INDEX "Invoice_brandId_createdAt_idx" ON "nota"."Invoice"("brandId", "createdAt");
CREATE UNIQUE INDEX "Invoice_brandId_brandNumber_key" ON "nota"."Invoice"("brandId", "brandNumber");
CREATE UNIQUE INDEX "Invoice_numberPrefix_brandNumber_key" ON "nota"."Invoice"("numberPrefix", "brandNumber");
ALTER TABLE "nota"."Invoice" ADD CONSTRAINT "Invoice_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "nota"."Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
REVOKE ALL ON TABLE "nota"."Brand" FROM PUBLIC;
ALTER TABLE "nota"."Brand" ENABLE ROW LEVEL SECURITY;
COMMIT;
