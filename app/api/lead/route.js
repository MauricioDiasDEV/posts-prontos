export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, phone, niche, message } = data;

    if (!name || !email || !phone) {
      return Response.json(
        { ok: false, error: "missing fields" },
        { status: 400 },
      );
    }

    const lead = {
      name,
      email,
      phone,
      niche,
      message,
      createdAt: new Date().toISOString(),
    };

    console.log("[LEAD]", JSON.stringify(lead));

    if (process.env.LEAD_WEBHOOK_URL) {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      }).catch((e) => console.error("webhook error", e));
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
