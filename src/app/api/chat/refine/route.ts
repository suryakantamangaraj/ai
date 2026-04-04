import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

export const runtime = "edge";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required and must be a string." },
        { status: 400 }
      );
    }

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content:
            "Your task is to refine and optimize the user's input prompt for a Large Language Model. Make it more descriptive, clear, and structured while maintaining the original intent. Provide only the refined prompt without any preamble or explanation.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 1024,
      temperature: 0.7,
    });

    const refinedPrompt = response.choices[0]?.message?.content || prompt;

    return NextResponse.json({ refinedPrompt });
  } catch (error: any) {
    console.error("Refine Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
