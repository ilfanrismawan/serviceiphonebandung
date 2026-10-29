CREATE SCHEMA IF NOT EXISTS "nota";

CREATE TABLE "nota"."Invoice" (
  "id" TEXT NOT NULL,
  "number" SERIAL NOT NULL,
  "token" TEXT NOT NULL,
  "customerName" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "device" TEXT NOT NULL,
  "identifier" TEXT NOT NULL DEFAULT '',
  "complaint" TEXT NOT NULL,
  "action" TEXT NOT NULL DEFAULT '',
  "warranty" TEXT NOT NULL DEFAULT '',
  "notes" TEXT NOT NULL DEFAULT '',
  "internalNote" TEXT NOT NULL DEFAULT '',
  "status" TEXT NOT NULL DEFAULT 'Diterima',
  "discount" INTEGER NOT NULL DEFAULT 0,
  "version" INTEGER NOT NULL DEFAULT 1,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "nota"."InvoiceItem" (
  "id" TEXT NOT NULL,
  "invoiceId" TEXT NOT NULL,
  "label" TEXT NOT NULL,
  "quantity" INTEGER NOT NULL,
  "price" INTEGER NOT NULL,
  "position" INTEGER NOT NULL,
  CONSTRAINT "InvoiceItem_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "nota"."Payment" (
  "id" TEXT NOT NULL,
  "invoiceId" TEXT NOT NULL,
  "amount" INTEGER NOT NULL,
  "method" TEXT NOT NULL,
  "note" TEXT NOT NULL DEFAULT '',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "nota"."InvoiceHistory" (
  "id" TEXT NOT NULL,
  "invoiceId" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "event" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "InvoiceHistory_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "nota"."ShopSettings" (
  "id" TEXT NOT NULL DEFAULT 'shop',
  "data" JSONB NOT NULL,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "ShopSettings_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "nota"."AdminCredential" (
  "id" TEXT NOT NULL DEFAULT 'admin',
  "passcodeHash" TEXT NOT NULL,
  CONSTRAINT "AdminCredential_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "nota"."AdminSession" (
  "tokenHash" TEXT NOT NULL,
  "expiresAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "AdminSession_pkey" PRIMARY KEY ("tokenHash")
);
CREATE TABLE "nota"."LoginThrottle" (
  "key" TEXT NOT NULL,
  "attempts" INTEGER NOT NULL DEFAULT 1,
  "expiresAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "LoginThrottle_pkey" PRIMARY KEY ("key")
);
CREATE UNIQUE INDEX "Invoice_number_key" ON "nota"."Invoice"("number");
CREATE UNIQUE INDEX "Invoice_token_key" ON "nota"."Invoice"("token");
CREATE INDEX "Invoice_createdAt_idx" ON "nota"."Invoice"("createdAt");
CREATE INDEX "Invoice_status_idx" ON "nota"."Invoice"("status");
CREATE INDEX "InvoiceItem_invoiceId_idx" ON "nota"."InvoiceItem"("invoiceId");
CREATE INDEX "Payment_invoiceId_idx" ON "nota"."Payment"("invoiceId");
CREATE INDEX "InvoiceHistory_invoiceId_idx" ON "nota"."InvoiceHistory"("invoiceId");
CREATE INDEX "AdminSession_expiresAt_idx" ON "nota"."AdminSession"("expiresAt");
CREATE INDEX "LoginThrottle_expiresAt_idx" ON "nota"."LoginThrottle"("expiresAt");
ALTER TABLE "nota"."InvoiceItem" ADD CONSTRAINT "InvoiceItem_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "nota"."Invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "nota"."Payment" ADD CONSTRAINT "Payment_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "nota"."Invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "nota"."InvoiceHistory" ADD CONSTRAINT "InvoiceHistory_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "nota"."Invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- These tables are accessed only by the application server as their owner.
REVOKE ALL ON SCHEMA "nota" FROM PUBLIC;
REVOKE ALL ON ALL TABLES IN SCHEMA "nota" FROM PUBLIC;
REVOKE ALL ON ALL SEQUENCES IN SCHEMA "nota" FROM PUBLIC;
ALTER TABLE "nota"."Invoice" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "nota"."InvoiceItem" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "nota"."Payment" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "nota"."InvoiceHistory" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "nota"."ShopSettings" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "nota"."AdminCredential" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "nota"."AdminSession" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "nota"."LoginThrottle" ENABLE ROW LEVEL SECURITY;
