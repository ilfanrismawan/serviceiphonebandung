import { config } from "dotenv";
import { spawnSync } from "node:child_process";
config({ path: [".env.local", ".env"], quiet: true });
const url = process.env.NOTA_TEST_DATABASE_URL;
if (!url || url === process.env.DATABASE_URL)
  throw new Error(
    "Gunakan NOTA_TEST_DATABASE_URL yang berbeda dari database operasional.",
  );
const env = { ...process.env, DATABASE_URL: url, DIRECT_URL: url };
for (const [script, args] of [
  ["node_modules/next/dist/bin/next", ["build", ...(process.env.NOTA_WEBPACK === "1" ? ["--webpack"] : [])]],
  ["node_modules/prisma/build/index.js", ["migrate", "deploy"]],
  [
    "node_modules/@playwright/test/cli.js",
    ["test", "--config", "playwright.nota.config.ts"],
  ],
]) {
  const result = spawnSync(process.execPath, [script, ...args], {
    env,
    stdio: "inherit",
    windowsHide: true,
  });
  if (result.status !== 0) process.exit(result.status || 1);
}
