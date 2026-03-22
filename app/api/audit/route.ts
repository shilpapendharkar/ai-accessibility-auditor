import { NextResponse } from "next/server";
import { auditCode } from "../../lib/openai";
import db from "../../lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const code = body?.code;

    if (!code) {
      return NextResponse.json({ error: "Missing `code` in request body" }, { status: 400 });
    }

    const { result, error } = await auditCode(code);

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    // Save the audit to the demo DB (in-memory)
    try {
      const rec = await db.saveAudit({ userId: null, code, result: result ?? "" });
      return NextResponse.json({ result, auditId: rec.id });
    } catch (saveErr: any) {
      // If saving fails, still return the result but log the failure
      // eslint-disable-next-line no-console
      console.error("Failed to save audit:", saveErr);
      return NextResponse.json({ result });
    }
  } catch (err: any) {
    // Log server-side for easier debugging
    // eslint-disable-next-line no-console
    console.error("/api/audit error:", err);
    const message = err?.message ?? String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}