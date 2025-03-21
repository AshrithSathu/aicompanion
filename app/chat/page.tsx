"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";

// Define message type for better type safety
type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
};

// Remove Groq import and initialization from client-side code
// Remove configDotenv import as well

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initialMessageSent = useRef(false);

  // Load messages from localStorage when component mounts
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");

    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else if (!initialMessageSent.current) {
      // If no stored messages, add initial greeting
      const initialMessage = {
        role: "assistant" as const,
        content:
          "Hi there! I'm Ashrith, your AI companion. How can I help you today?",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([initialMessage]);
      localStorage.setItem("chatMessages", JSON.stringify([initialMessage]));
      initialMessageSent.current = true;
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      // Keep only the last 10 messages in localStorage
      const recentMessages = messages.slice(-10);
      localStorage.setItem("chatMessages", JSON.stringify(recentMessages));
    }
  }, [messages]);

  // New function to get AI response from our API route
  const getAIResponse = async (messages: Message[]) => {
    // Convert our messages to the format expected by the API
    const apiMessages = messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: apiMessages }),
    });

    if (!response.ok) {
      throw new Error("Failed to get response from AI");
    }

    const data = await response.json();
    return data.content;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "" || isLoading) return;

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Get all messages including the new one for context
      const updatedMessages = [...messages, userMessage];

      // Get AI response from our API route
      const aiResponse = await getAIResponse(updatedMessages);

      const assistantMessage: Message = {
        role: "assistant",
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error in chat:", error);

      // Fallback response in case of error
      const errorMessage: Message = {
        role: "assistant",
        content:
          "Sorry, I'm having trouble responding right now. Let's try again in a moment! 😅",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-[#efeae3]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="text-gray-500 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full overflow-hidden bg-black relative">
              <Image
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
                alt="Ashrith Avatar"
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-3">
              <h2 className="font-medium">Ashrith</h2>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-xs text-gray-500">Online</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="text-xs border-gray-300 text-gray-700 hover:bg-gray-100"
            onClick={() => {
              if (
                confirm(
                  "Are you sure you want to clear all messages? This cannot be undone."
                )
              ) {
                localStorage.removeItem("chatMessages");
                setMessages([
                  {
                    role: "assistant",
                    content:
                      "Hi there! I'm Ashrith, your AI companion. How can I help you today?",
                    timestamp: new Date().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                  },
                ]);
              }
            }}
          >
            Clear Chat
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center text-sm text-gray-500 mb-4">
            Today{" "}
            {new Date().toLocaleDateString([], {
              month: "long",
              day: "numeric",
            })}
          </div>

          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                {message.role === "assistant" && (
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-black mr-2 flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
                      alt="Ashrith Avatar"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[80%] ${
                    message.role === "user" ? "bg-black text-white" : "bg-white"
                  } rounded-lg p-3 shadow-sm`}
                >
                  <p>{message.content}</p>
                  <p
                    className={`text-xs ${
                      message.role === "user"
                        ? "text-gray-300"
                        : "text-gray-500"
                    } mt-1 text-right`}
                  >
                    {message.timestamp}
                  </p>
                </div>
                {message.role === "user" && (
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300 ml-2 flex-shrink-0">
                    <div className="h-full w-full flex items-center justify-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="border-t border-gray-200 bg-white p-4">
        <form
          onSubmit={handleSendMessage}
          className="max-w-2xl mx-auto flex items-center space-x-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-full border-gray-300 focus:border-black focus:ring-black"
            disabled={isLoading}
          />
          <Button
            type="submit"
            className="rounded-full bg-black text-white hover:bg-gray-800"
            disabled={input.trim() === "" || isLoading}
          >
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                Send
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
