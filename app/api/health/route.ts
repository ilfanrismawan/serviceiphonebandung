import { NextResponse } from "next/server";
import { db } from "@/lib/nota/db";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  // Opsional: proteksi jika CRON_SECRET diset di environment variables
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    const start = Date.now();
    await db().$queryRaw`SELECT 1`;
    const durationMs = Date.now() - start;

    return NextResponse.json({
      status: "ok",
      database: "active",
      latencyMs: durationMs,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Health check failed:", err);
    return NextResponse.json(
      { status: "error", message: "Database unreachable" },
      { status: 500 }
    );
  }
}