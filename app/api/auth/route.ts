import { NextResponse } from "next/server";

// Minimal placeholder auth route for demo purposes.
// Replace with a proper authentication implementation (NextAuth, Clerk, or custom) for production.

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body || {};

    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }

    // Demo: return a fake session token and user id.
    const fakeToken = "demo-token-123";
    const user = { id: "user_demo_1", email };

    return NextResponse.json({ token: fakeToken, user });
  } catch (err: any) {
    const message = err?.message ?? String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
