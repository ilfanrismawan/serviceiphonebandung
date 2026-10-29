import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import pg from "pg";

const source = new URL(
  process.env.NOTA_TEST_DATABASE_URL || "postgresql://invalid",
);
if (source.hostname !== "127.0.0.1" || source.port !== "55433")
  throw new Error(
    "Migration check only supports the isolated local test cluster.",
  );
const admin = new pg.Client({ connectionString: source.toString() });
await admin.connect();
await admin.query("CREATE DATABASE nota_migration_check");
await admin.end();
source.pathname = "/nota_migration_check";
const client = new pg.Client({ connectionString: source.toString() });
await client.connect();
try {
  await client.query(
    readFileSync(
      "prisma/migrations/20261029000000_init_nota/migration.sql",
      "utf8",
    ),
  );
  const profile = {
    name: "Identitas Toko Lama",
    phone: "081234567890",
    bank: "Rekening lama",
    color: "#0071e3",
  };
  await client.query(
    'INSERT INTO nota."ShopSettings" (id,data,"updatedAt") VALUES ($1,$2,NOW())',
    ["shop", profile],
  );
  await client.query(
    'INSERT INTO nota."Invoice" (id,number,token,"customerName",phone,device,complaint,"updatedAt") VALUES ($1,50,$2,$3,$4,$5,$6,NOW())',
    [
      "legacy",
      "legacy-token-unchanged",
      "Customer lama",
      "081234567890",
      "iPhone 13",
      "Keluhan lama",
    ],
  );
  await client.query(
    'INSERT INTO nota."Payment" (id,"invoiceId",amount,method) VALUES ($1,$2,100000,$3)',
    ["legacy-payment", "legacy", "Tunai"],
  );
  await client.query(
    readFileSync(
      "prisma/migrations/20261029010000_multi_brand/migration.sql",
      "utf8",
    ),
  );
  const {
    rows: [invoice],
  } = await client.query('SELECT * FROM nota."Invoice" WHERE id=$1', [
    "legacy",
  ]);
  assert.equal(invoice.brandId, "sib");
  assert.equal(invoice.brandNumber, 50);
  assert.equal(invoice.numberPrefix, "SIB");
  assert.equal(invoice.token, "legacy-token-unchanged");
  assert.deepEqual(invoice.brandSnapshot, profile);
  const {
    rows: [brand],
  } = await client.query(
    'UPDATE nota."Brand" SET counter=counter+1 WHERE id=$1 RETURNING counter',
    ["sib"],
  );
  assert.equal(brand.counter, 51);
  assert.equal(
    (
      await client.query('SELECT amount FROM nota."Payment" WHERE id=$1', [
        "legacy-payment",
      ])
    ).rows[0].amount,
    100000,
  );
  assert.equal(
    (
      await client.query(
        "SELECT relrowsecurity FROM pg_class WHERE oid='nota.\"Brand\"'::regclass",
      )
    ).rows[0].relrowsecurity,
    true,
  );
  console.log(
    "Migration check passed: legacy invoices, links, payments, identity and counters preserved.",
  );
} finally {
  await client.end();
}
