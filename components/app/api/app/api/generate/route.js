export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "mixtral-8x7b-32768",
        messages: [
          { role: "system", content: "You are an AI assistant." },
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await response.json();

    return new Response(JSON.stringify({ result: data.choices[0].message.content }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Groq request failed." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
