/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useChat } from "ai/react";
import { nanoid } from "nanoid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { ChatModalProps } from "./types";

const SUGGESTION_BUTTONS = [
  "Which watch has the right features for me?",
  "What features do Chronos products have?",
  "Help me find a watch within my budget",
  "Compare vs other models",
  "How does cellular work?",
  "What are the main selling points of this watch",
];

export function ChatModal({
  isOpen,
  onClose,
  initialMessage = false,
  systemPrompt,
  productId,
}: ChatModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/ai",
      initialMessages:
        initialMessage && productId
          ? [
              {
                id: nanoid(),
                role: "assistant",
                content: `Looks like you're interested in the ${productId}. Is there anything you'd like to ask me about this product?`,
              },
            ]
          : [],
      body: {
        systemPrompt,
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
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.content}
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
