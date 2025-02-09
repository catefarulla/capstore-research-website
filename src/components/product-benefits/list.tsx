import type { Benefit } from "@/data/products/type";
import BenefitItem from "./item";

interface Props {
  benefits: Benefit[];
}

export default function BenefitList({ benefits }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <BenefitItem
          key={index}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </div>
  );
}
