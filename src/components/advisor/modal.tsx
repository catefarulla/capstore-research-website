/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useChat } from "ai/react";
import { nanoid } from "nanoid";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { ChatProps } from "./types";

const SUGGESTION_BUTTONS = [
  "Which watch has the right features for me?",
  "What features do Chronos products have?",
  "Help me find a watch within my budget",
  "Compare vs other models",
  "How does cellular work?",
  "What are the main selling points of this watch",
];

export function ChatModal({ isOpen, onClose, selectedOptions }: ChatProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const generateSystemPrompt = () => {
    const { productName, color, size, cellular } = selectedOptions;
    return `You are a helpful product advisor for ${productName}. The customer is currently looking at the following configuration:
- Color: ${color}
- Size: ${size}${cellular !== undefined ? `\n- Cellular: ${cellular ? "Yes" : "No"}` : ""}

Please help them make a decision about their purchase. You can discuss features, benefits, and answer any questions about this specific model and configuration.`;
  };

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/ai",
      initialMessages: [
        {
          id: nanoid(),
          role: "assistant",
          content: `Looks like you're interested in the ${selectedOptions.productName}. Is there anything you'd like to ask me about this product?`,
        },
      ],
      body: {
        systemPrompt: generateSystemPrompt(),
      },
    });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
    }
  }, [messages]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="fixed inset-4 md:inset-x-auto md:inset-y-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl bg-white rounded-lg shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="text-lg font-semibold">CHRONOS</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        {/* Chat Messages */}
        <ScrollArea ref={scrollRef} className="flex-1 p-4">
          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="text-2xl font-semibold text-center py-8">
                How can I help you today?
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-2 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary bg-slate-200 text-primary-foreground flex items-center justify-center font-semibold">
                      C
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] ${
                      message.role === "user"
                        ? "text-gray-900"
                        : "bg-slate-100 rounded-xl px-4 py-2"
                    }`}
                  >
                    <div
                      className={`prose prose-sm ${
                        message.role === "assistant" ? "dark:prose-invert" : ""
                      } prose-p:my-0 prose-headings:my-0`}
                    >
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {messages.length === 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {SUGGESTION_BUTTONS.map((suggestion) => (
                <Button
                  key={suggestion}
                  variant="secondary"
                  className="text-sm"
                  onClick={() => {
                    handleInputChange({ target: { value: suggestion } } as any);
                    handleSubmit({ preventDefault: () => {} } as any);
                  }}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          )}
        </ScrollArea>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="border-t p-4">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Message Chronos advisor..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
