import EmbeddedPostgres from "embedded-postgres";
import { randomBytes } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

// All local database files stay inside this ignored project folder.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const testing = process.argv.includes("--test");
const directory = path.resolve(
  root,
  ".nota-local",
  testing ? `test-${Date.now()}` : "development",
);
if (!directory.startsWith(path.join(root, ".nota-local") + path.sep))
  throw new Error("Invalid local database path");
mkdirSync(directory, { recursive: true });
const credentialFile = path.join(directory, "credential.json");
const credentials = existsSync(credentialFile)
  ? JSON.parse(readFileSync(credentialFile, "utf8"))
  : { password: randomBytes(24).toString("hex") };
if (!existsSync(credentialFile))
  writeFileSync(credentialFile, JSON.stringify(credentials), { mode: 0o600 });
const port = testing ? 55433 : 55432;
const pg = new EmbeddedPostgres({
  databaseDir: path.join(directory, "database"),
  user: "nota",
  password: credentials.password,
  port,
  persistent: true,
  authMethod: "scram-sha-256",
  initdbFlags: ["--encoding=UTF8", "--no-sync"],
  postgresFlags: ["-h", "127.0.0.1"],
  onLog: () => {},
  onError: (error) => console.error(String(error)),
});
let child;
let stopping = false;
let started = false;
let interrupted = false;
const platformName =
  process.platform === "win32" ? "windows" : process.platform;
const { pg_ctl } = await import(
  `@embedded-postgres/${platformName}-${process.arch}`
);
async function shutdown() {
  if (stopping) return;
  stopping = true;
  if (child && child.exitCode === null) child.kill();
  if (started) {
    await new Promise((resolve, reject) => {
      const stop = spawn(
        pg_ctl,
        ["-D", path.join(directory, "database"), "-m", "fast", "-w", "stop"],
        { windowsHide: true, stdio: "ignore" },
      );
      stop.on("error", reject);
      stop.on("exit", (code) =>
        code === 0
          ? resolve()
          : reject(new Error("Database lokal belum dapat dihentikan.")),
      );
    });
    started = false;
  }
}
// Replace the helper library's force-kill signal handler with a clean database shutdown.
for (const signal of ["SIGINT", "SIGTERM", "SIGHUP", "SIGBREAK"]) {
  process.removeAllListeners(signal);
  process.on(signal, () => {
    interrupted = true;
    void shutdown();
  });
}
const url = `postgresql://nota:${credentials.password}@127.0.0.1:${port}/nota`;
const env = {
  ...process.env,
  DATABASE_URL: url,
  DIRECT_URL: url,
  ADMIN_INITIAL_PASSCODE: "121413",
  NOTA_PUBLIC_SITE_URL: testing
    ? "http://localhost:3107"
    : "http://localhost:3100",
  ...(testing ? { NOTA_TEST_DATABASE_URL: url } : {}),
};
function run(script, args) {
  return new Promise((resolve, reject) => {
    child = spawn(process.execPath, [script, ...args], {
      cwd: root,
      env,
      stdio: "inherit",
      windowsHide: true,
    });
    child.on("error", reject);
    child.on("exit", (code) =>
      code === 0
        ? resolve()
        : reject(new Error(`Command exited with code ${code}`)),
    );
  });
}
try {
  if (!existsSync(path.join(directory, "database", "PG_VERSION")))
    await pg.initialise();
  await pg.start();
  started = true;
  const client = pg.getPgClient("postgres", "127.0.0.1");
  await client.connect();
  const exists = await client.query(
    "SELECT 1 FROM pg_database WHERE datname = 'nota'",
  );
  await client.end();
  if (!exists.rows.length) await pg.createDatabase("nota");
  if (testing) await run("scripts/nota-check-migration.mjs", []);
  await run("node_modules/prisma/build/index.js", ["migrate", "deploy"]);
  if (testing) {
    await run("node_modules/next/dist/bin/next", ["build", ...(process.env.NOTA_WEBPACK === "1" ? ["--webpack"] : [])]);
    await run("node_modules/@playwright/test/cli.js", [
      "test",
      "--config",
      "playwright.nota.config.ts",
    ]);
  } else {
    console.log(
      "\nNota lokal siap: http://localhost:3100/admin\nPasscode awal: 121413. Data lokal terpisah dari Supabase.\n",
    );
    await run("node_modules/next/dist/bin/next", ["dev", "--port", "3100"]);
  }
} catch (error) {
  if (!interrupted) {
    console.error(
      error instanceof Error ? error.message : "Local database failed",
    );
    process.exitCode = 1;
  }
} finally {
  await shutdown();
}
// Avoid the helper's beforeExit hook resetting a failed command's exit status.
process.exit(process.exitCode || 0);
