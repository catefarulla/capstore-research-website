import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon: string;
  title: string;
  description: string;
};

export default function BenefitItem({ icon, title, description }: Props) {
  // Convert kebab-case to PascalCase for the icon name
  const iconName = icon
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("") as keyof typeof Icons;
  const IconComponent = Icons[iconName] as LucideIcon;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-gray-200 p-4 rounded-lg mb-4">
        {IconComponent && <IconComponent className="w-6 h-6" />}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 max-w-xs">{description}</p>
    </div>
  );
}
