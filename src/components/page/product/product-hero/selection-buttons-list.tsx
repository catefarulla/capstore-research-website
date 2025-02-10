import type { ReactNode } from "react";
import SelectionButton from "./selection-button";

interface SelectionButtonsListProps {
  label: string;
  options: Array<{
    key: string;
    label: ReactNode;
    value: string | boolean;
  }>;
  selectedValue: string | boolean;
  onSelect: (value: string | boolean) => void;
}

export default function SelectionButtonsList({
  label,
  options,
  selectedValue,
  onSelect,
}: SelectionButtonsListProps) {
  return (
    <div>
      <h3 className="mb-3 font-heading font-semibold text-sm">{label}</h3>
      <div className="flex gap-2">
        {options.map((option) => (
          <SelectionButton
            key={option.key}
            selected={selectedValue === option.value}
            onClick={() => onSelect(option.value)}
          >
            {option.label}
          </SelectionButton>
        ))}
      </div>
    </div>
  );
}
