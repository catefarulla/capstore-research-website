import { Button } from "@/components/ui/button";

interface ChatTriggerProps {
  onClick: () => void;
}

export function ChatTrigger({ onClick }: ChatTriggerProps) {
  return (
    <Button onClick={onClick} className="w-full rounded-full py-6 text-lg">
      Chat to advisor
    </Button>
  );
}
