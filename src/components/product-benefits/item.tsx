type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function BenefitItem({ icon, title, description }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-gray-200 p-4 rounded-lg mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 max-w-xs">{description}</p>
    </div>
  );
}
