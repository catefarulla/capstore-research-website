import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { useChat } from "ai/react";
import { nanoid } from "nanoid";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { ChatProps } from "./types";
import { SUGGESTION_BUTTONS } from "@/data/ai/suggestion-buttons";
import { generateInitialMessage } from "@/data/ai/initial-message";

function LoadingDots() {
  return (
    <div className="flex items-center gap-0.5 py-2">
      <div className="w-1.5 h-1.5 rounded-full bg-cool-grey-300 animate-bounce [animation-delay:-0.3s]" />
      <div className="w-1.5 h-1.5 rounded-full bg-cool-grey-300 animate-bounce [animation-delay:-0.15s]" />
      <div className="w-1.5 h-1.5 rounded-full bg-cool-grey-300 animate-bounce" />
    </div>
  );
}

export function ChatModal({
  isOpen,
  onClose,
  selectedOptions,
  withFriction,
}: ChatProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    append,
  } = useChat({
    api: "/api/ai",
    initialMessages: [
      {
        id: nanoid(),
        role: "assistant",
        content: generateInitialMessage(selectedOptions),
      },
    ],
    onFinish: (message) => {
      console.log("Message finished:", message);
    },
    onResponse: async (response) => {
      if (withFriction) {
        const quickRepliesHeader = response.headers.get("X-Quick-Replies");
        if (quickRepliesHeader) {
          try {
            setQuickReplies(JSON.parse(quickRepliesHeader));
          } catch (e) {
            console.error("Failed to parse quick replies:", e);
            setQuickReplies([]);
          }
        } else {
          setQuickReplies([]);
        }
      }
    },
    onError: (error) => {
      console.error("Chat error:", error);
      setQuickReplies([]);
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

  const handleQuickReply = async (reply: string) => {
    setQuickReplies([]); // Clear quick replies immediately
    await append({
      role: "user",
      content: reply,
      id: nanoid(),
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Dark overlay + blur backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md" />

      {/* Modal container */}
      <div className="relative flex items-stretch md:items-center justify-center h-[100dvh] md:p-4">
        <div className="w-full h-[100dvh] bg-white flex flex-col md:w-auto md:max-w-4xl md:h-[85dvh] md:max-h-[900px]">
          {/* Header */}
          <div className="shrink-0 flex items-center justify-between border-b border-cool-grey-200 px-6 py-4">
            <span className="text-xl md:text-2xl font-heading font-black tracking-tight uppercase text-text-primary">
              Chronos
            </span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          {/* Chat Messages */}
          <ScrollArea className="flex-1 px-6">
            <div className="space-y-4 py-6 pr-4">
              {messages.length === 0 ? (
                <div className="text-2xl font-semibold text-center py-8 text-text-primary">
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
                      <div className="flex-shrink-0 w-8 h-8 bg-surface-accent text-white flex items-center justify-center font-semibold">
                        C
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] ${
                        message.role === "user"
                          ? "text-text-primary"
                          : "bg-ecru border border-neutral-200 px-4 py-2"
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
              {/* Loading animation */}
              {isLoading && (
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-8 h-8 bg-surface-accent text-white flex items-center justify-center font-semibold">
                    C
                  </div>
                  <LoadingDots />
                </div>
              )}
              {/* Invisible element for scrolling */}
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {SUGGESTION_BUTTONS.map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="accent"
                    className="text-sm"
                    onClick={() => handleQuickReply(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            )}
          </ScrollArea>

          {/* Quick Replies - Moved outside ScrollArea */}
          {withFriction && quickReplies.length > 0 && (
            <div className="shrink-0 px-6 py-3 border-t border-cool-grey-200 bg-white">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <Button
                    key={reply}
                    variant="accent"
                    size="sm"
                    className="text-sm"
                    onClick={() => handleQuickReply(reply)}
                  >
                    {reply}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="shrink-0 border-t border-cool-grey-200 p-6"
          >
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                placeholder="Message Chronos advisor..."
                disabled={isLoading}
                className="flex-1 border-surface-coolGrey focus-visible:ring-surface-accent focus-visible:ring-2 focus-visible:ring-offset-0"
              />
              <Button
                variant="accent"
                type="submit"
                disabled={isLoading || !input.trim()}
                className={`${isLoading || !input.trim() ? "bg-cool-grey-400 hover:bg-cool-grey-400 text-neutral-700" : ""}`}
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
