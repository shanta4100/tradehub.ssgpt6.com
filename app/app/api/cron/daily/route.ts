export const runtime = "nodejs";

function requireCronAuth(req: Request) {
  const secret = process.env.CRON_SECRET;
  // If you haven't set a secret yet, don't block (so it works immediately)
  if (!secret) return true;

  const got = req.headers.get("x-cron-secret");
  return got === secret;
}

export async function GET(req: Request) {
  if (!requireCronAuth(req)) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  // Put your daily automation logic here
  // (safe placeholder for now)
  return Response.json({
    ok: true,
    job: "daily",
    ranAt: new Date().toISOString(),
  });
}