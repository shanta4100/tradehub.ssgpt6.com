export const runtime = "nodejs";

function requireCronAuth(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true; // if not set, allow
  const got = req.headers.get("x-cron-secret");
  return got === secret;
}

export async function GET(req: Request) {
  if (!requireCronAuth(req)) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  return Response.json({
    ok: true,
    job: "daily",
    ranAt: new Date().toISOString(),
  });
}