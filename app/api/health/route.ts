export const runtime = "nodejs";

export async function GET() {
  return Response.json({
    ok: true,
    service: "SSGPT6 TradeHub",
    ts: new Date().toISOString(),
  });
}