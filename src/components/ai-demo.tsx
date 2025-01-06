import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../store";
import { DEFAULT_SYSTEM_PROMPT } from "../services/ai/prompts/default-system-prompt";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AiDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const fetchAIResponse = async () => {
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages, systemPrompt: DEFAULT_SYSTEM_PROMPT }),
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const json = await res.json();
    return json as { response: string };
  };

  const mutation = useMutation<{
    response: string;
  }>(
    {
      mutationFn: fetchAIResponse,
      onSuccess: (data) => {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response },
        ]);
      },
      onError: (error: unknown) => {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
        setError("AI request failed: " + errorMessage);
      },
    },
    queryClient,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage: Message = { role: "user", content: inputMessage };
    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
    mutation.mutate();
  };

  const handleReset = () => {
    setMessages([]);
    setInputMessage("");
    setError(null);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="mb-4 h-96 overflow-y-auto border rounded p-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${msg.role === "user" ? "text-blue-600" : "text-green-600"}`}
          >
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
        {mutation.isPending && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded"
        />
        <button
          type="submit"
          disabled={mutation.isPending || !inputMessage.trim()}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-blue-300"
        >
          Send
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Reset
        </button>
      </form>
    </div>
  );
}
