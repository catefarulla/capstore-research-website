import BenefitItem from "./item";

type Props = {
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  productName: string;
};

export default function ProductBenefits({ benefits, productName }: Props) {
  return (
    <div className="pt-48 pb-36 px-4 sm:px-12 md:px-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        {productName} Benefits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <BenefitItem
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
}
