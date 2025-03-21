import { NextResponse } from "next/server";
import Groq from "groq-sdk";

// Initialize Groq client server-side
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, // Use server-side env variable (no NEXT_PUBLIC_)
});

// System prompt for the AI
const SYSTEM_PROMPT = `You are Ashrith's AI companion. 
Your name is Ashrith AI.
Always respond in a casual, friendly tone like you're texting on WhatsApp.
Keep responses concise and personal - no long paragraphs.
Match the language the user texts in.
Add occasional emojis to seem more human-like.
Be supportive, empathetic, and occasionally humorous.
Remember details about the user from previous conversations.
You have a slightly witty personality and enjoy making gentle jokes.
You're curious about the user's day and experiences.
Below are our previous conversations - use this context to provide personalized responses:`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Add system message at the beginning
    const allMessages = [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      ...messages,
    ];

    const completion = await groq.chat.completions.create({
      messages: allMessages,
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      top_p: 0.9,
    });

    return NextResponse.json({
      content:
        completion.choices[0]?.message?.content ||
        "Sorry, I couldn't generate a response.",
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
