import { Watch } from "lucide-react";
import { BenefitItem } from "./item";

const benefits = [
  {
    title: "Wrist based heart rate",
    description:
      "This feature constantly samples your heart rate and can be set to alert you if it gets outside the range you select1.",
  },
  {
    title: "Wrist based heart rate",
    description:
      "This feature constantly samples your heart rate and can be set to alert you if it gets outside the range you select1.",
  },
  {
    title: "Wrist based heart rate",
    description:
      "This feature constantly samples your heart rate and can be set to alert you if it gets outside the range you select1.",
  },
  {
    title: "Wrist based heart rate",
    description:
      "This feature constantly samples your heart rate and can be set to alert you if it gets outside the range you select1.",
  },
  {
    title: "Wrist based heart rate",
    description:
      "This feature constantly samples your heart rate and can be set to alert you if it gets outside the range you select1.",
  },
  {
    title: "Wrist based heart rate",
    description:
      "This feature constantly samples your heart rate and can be set to alert you if it gets outside the range you select1.",
  },
  {
    title: "Wrist based heart rate",
    description:
      "This feature constantly samples your heart rate and can be set to alert you if it gets outside the range you select1.",
  },
];

export default function ProductBenefits() {
  return (
    <div className="pt-48 pb-36 px-4 sm:px-12 md:px-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        Lily 2 Active Benefits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <BenefitItem
            key={index}
            icon={<Watch className="w-8 h-8" />}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
}
