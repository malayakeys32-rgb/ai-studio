import { NextResponse } from "next/server";

export async function POST(req) {
  const { messages } = await req.json();

  const system = {
    role: "system",
    content: `
You are the AI brain of a personal-use creative studio.
You may work with legal, adult, non-exploitative content, including artistic and sensual imagery.
You must NOT process pornography, explicit sexual acts, minors, or anything illegal.
Stay creative, helpful, and professional.
    `,
  };

  const payload = {
    model: "gpt-4o-mini",
    messages: [system, ...messages],
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  return NextResponse.json(data);
}
