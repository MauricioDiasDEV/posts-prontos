export async function POST(req) {
  try {
    const data = await req.json();
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    if (!webhookUrl) return Response.json({ ok: true });

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // Se o Google retornar erro, vamos ler o texto
    const responseText = await response.text();

    console.log(`3. Status do Google: ${response.status}`);
    console.log(`4. Início da resposta: ${responseText.substring(0, 150)}`); // Mostra os primeiros 150 caracteres

    return Response.json({ ok: true });
  } catch (error) {
    console.error("ERRO:", error);
    return Response.json({ ok: false }, { status: 500 });
  }
}
