export interface ChatProps {
  initialMessage?: boolean;
  systemPrompt?: string;
  enableStreaming?: boolean;
  productId?: string;
}

export interface ChatModalProps extends ChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export type Message = {
  id: string;
  role: "system" | "user" | "assistant";
  content: string;
};
