import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: string;
  title: string;
  description: string;
}

export default function BenefitItem({ icon, title, description }: Props) {
  // Convert kebab-case to PascalCase for the icon name
  const iconName = icon
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("") as keyof typeof Icons;
  const IconComponent = Icons[iconName] as LucideIcon;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-cool-grey-100 p-4 mb-4">
        {IconComponent && (
          <IconComponent className="w-6 h-6 text-text-accent" />
        )}
      </div>
      <h3 className="text-lg mb-2 font-heading font-semibold">{title}</h3>
      <p className="text-sm text-text-secondary max-w-xs">{description}</p>
    </div>
  );
}
