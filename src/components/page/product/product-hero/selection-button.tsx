import { type ReactNode } from "react";

interface SelectionButtonProps {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}

export default function SelectionButton({
  selected,
  onClick,
  children,
}: SelectionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border ${
        selected ? "border-blue-500 bg-blue-50" : "border-gray-200"
      }`}
    >
      {children}
    </button>
  );
}
