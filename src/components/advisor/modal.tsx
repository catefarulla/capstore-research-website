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

export function ChatModal({
  isOpen,
  onClose,
  selectedOptions,
  withFriction,
}: ChatProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const generateSystemPrompt = () => {
    const { productName, color, size, cellular } = selectedOptions;
    const basePrompt = `You are a helpful product advisor for ${productName}. The customer is currently looking at the following configuration:
- Color: ${color}
- Size: ${size}${cellular !== undefined ? `\n- Cellular: ${cellular ? "Yes" : "No"}` : ""}

AVAILABLE PRODUCTS (use these slugs for links):
- Chronos Elite: [Chronos Elite](/product/chronos-elite)
- Chronos Pro: [Chronos Pro](/product/chronos-pro)
- Chronos Active: [Chronos Active](/product/chronos-active)

When suggesting other products, use markdown links with these exact URLs.`;

    if (withFriction) {
      return `${basePrompt}

IMPORTANT INSTRUCTIONS FOR YOUR RESPONSES:
1. Keep responses very concise (2-3 sentences maximum)
2. Focus on asking investigative questions to understand user needs
3. Ask one clear question at a time
4. Hold off on making recommendations until you understand their needs
5. Always end with a focused question about their specific needs or preferences
6. Keep the conversation focused and guided
7. When suggesting other products, use the markdown links provided above`;
    }

    return `${basePrompt}

INSTRUCTIONS FOR YOUR RESPONSES:
1. Be thorough and informative in your explanations
2. Focus on highlighting relevant features for this configuration
3. Feel free to make recommendations based on common use cases
4. You can cover multiple aspects in one response
5. Be conversational but professional
6. Share specific benefits and comparisons when relevant
7. When comparing with other products, use the markdown links provided above
8. Feel free to suggest alternative products that might better suit their needs`;
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
      onFinish: (message) => {
        console.log("Message finished:", message);
      },
      onError: (error) => {
        console.error("Chat error:", error);
      },
      // Use text protocol in friction mode, data protocol otherwise
      streamProtocol: withFriction ? "text" : "data",
    });

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when modal opens or after AI response
  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure the modal is rendered
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Focus input after AI finishes responding
  useEffect(() => {
    if (!isLoading && messages.length > 0) {
      inputRef.current?.focus();
    }
  }, [isLoading, messages.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Dark overlay + blur backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md" />

      {/* Modal container */}
      <div className="relative flex items-center justify-center p-4 min-h-screen">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg flex flex-col h-[85vh] max-h-[900px]">
          {/* Header */}
          <div className="shrink-0 flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-xl font-semibold">CHRONOS</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          {/* Chat Messages */}
          <ScrollArea className="flex-1 px-6">
            <div className="space-y-4 py-6 pr-4">
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
                        className={`flex flex-col gap-2 prose prose-sm ${
                          message.role === "assistant"
                            ? "dark:prose-invert"
                            : ""
                        } prose-p:my-0 prose-headings:my-0`}
                      >
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                ))
              )}
              {/* Invisible element for scrolling */}
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {SUGGESTION_BUTTONS.map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="secondary"
                    className="text-sm"
                    onClick={() => {
                      handleInputChange({
                        target: { value: suggestion },
                      } as any);
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
          <form onSubmit={handleSubmit} className="shrink-0 border-t p-6">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
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
    </div>
  );
}
