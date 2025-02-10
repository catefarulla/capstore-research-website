import { useState } from "react";
import { ChatTrigger } from "./trigger";
import { ChatModal } from "./modal";
import type { ChatProps } from "./types";

export default function Advisor(props: ChatProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <ChatTrigger onClick={() => setIsOpen(true)} />
      <ChatModal {...props} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
