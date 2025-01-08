import { Button } from "@/components/ui/button";

interface ChatTriggerProps {
  onClick: () => void;
}

export function ChatTrigger({ onClick }: ChatTriggerProps) {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400"
    >
      Chat to advisor
    </Button>
  );
}
