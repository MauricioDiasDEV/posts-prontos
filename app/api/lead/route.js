export async function POST(req) {
  try {
    const data = await req.json();
    console.log("1. Dados recebidos do site:", data);

    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error(
        "ERRO FATAL: A variável LEAD_WEBHOOK_URL não existe na Vercel!",
      );
      return Response.json({ ok: true, warning: "webhook não configurado" });
    }

    console.log("2. Tentando enviar para o Google...");
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const responseText = await response.text();
    console.log("3. Resposta do Google:", responseText);

    return Response.json({ ok: true });
  } catch (error) {
    console.error(
      "ERRO NO CATCH (A requisição falhou antes de chegar no Google):",
      error,
    );
    return Response.json({ ok: false }, { status: 500 });
  }
}
