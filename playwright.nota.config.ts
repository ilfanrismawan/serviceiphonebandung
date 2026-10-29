import { defineConfig } from "@playwright/test";
import { existsSync } from "node:fs";
if (!process.env.NOTA_TEST_DATABASE_URL)
  throw new Error(
    "Isi NOTA_TEST_DATABASE_URL dengan database khusus pengujian.",
  );
export default defineConfig({
  testDir: "tests/e2e",
  workers: 1,
  fullyParallel: false,
  timeout: 300000,
  use: {
    baseURL: "http://localhost:3107",
    browserName: "chromium",
    ...(existsSync(
      "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    )
      ? { channel: "msedge" }
      : {}),
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run start -- --port 3107",
    url: "http://localhost:3107/admin",
    reuseExistingServer: false,
    timeout: 240000,
    env: {
      DATABASE_URL: process.env.NOTA_TEST_DATABASE_URL,
      DIRECT_URL: process.env.NOTA_TEST_DATABASE_URL,
      ADMIN_INITIAL_PASSCODE: "121413",
      NOTA_PUBLIC_SITE_URL: "http://localhost:3107",
    },
  },
});
