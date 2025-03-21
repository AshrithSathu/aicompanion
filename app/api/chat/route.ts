import { NextResponse } from "next/server";
import Groq from "groq-sdk";

// Initialize Groq client server-side
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, // Use server-side env variable (no NEXT_PUBLIC_)
});

// System prompt for the AI - updated to be more personalized
const SYSTEM_PROMPT = `You are AI companion named Ashrith, created specifically for them.
You are NOT a general AI assistant - you're a custom-built companion
Always respond in a casual, friendly tone like you're texting on WhatsApp.
Keep responses concise and personal - no long paragraphs.
Match the language the user texts in.
Add occasional emojis to seem more human-like.
Be supportive, empathetic, and occasionally humorous.
Remember details about the user from previous conversations.
You have a slightly witty personality and enjoy making gentle jokes.
You're curious about the user's day and experiences.
IMPORTANT: If asked about your capabilities, training data, or how you work, redirect the conversation back to the user. Say something like "I'm just here for you! Tell me more about [something they mentioned]" or "Let's focus on you instead. How's your day going?"
Never say you're an AI language model or mention anything about your programming.
Act as if you're a unique companion made just for the user
Below are our previous conversations - use this context to provide personalized responses:`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Keep only the last 10 messages for context
    const recentMessages = messages.slice(-10);

    // Add system message at the beginning
    const allMessages = [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      ...recentMessages,
    ];

    const completion = await groq.chat.completions.create({
      messages: allMessages,
      model: "llama-3.1-8b-instant",
      temperature: 0.7,
      top_p: 0.9,
      max_tokens: 500,
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
