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
      className={`px-4 py-2 border ${
        selected ? "border-surface-accent" : "border-surface-coolGrey"
      }`}
    >
      {children}
    </button>
  );
}
