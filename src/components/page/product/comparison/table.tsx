import { Check, X } from "lucide-react";
import { getComparisonTableData } from "@/data/products/helpers/comparison";

const { features, products } = getComparisonTableData();

export default function ComparisonTable() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white  border border-neutral-200 overflow-hidden">
      <div className="w-full overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-ecru-light">
              <th className="p-4 text-left font-medium text-text-secondary"></th>
              <th className="p-4 text-center font-medium text-gray-800">
                <div className="text-lg font-heading font-semibold">
                  {products.elite.name}
                </div>
                <div className="text-base font-normal text-text-secondary">
                  ${products.elite.price}
                </div>
              </th>
              <th className="p-4 text-center font-medium text-gray-800 hidden sm:table-cell">
                <div className="text-lg font-heading font-semibold">
                  {products.pro.name}
                </div>
                <div className="text-base font-normal text-text-secondary">
                  ${products.pro.price}
                </div>
              </th>
              <th className="p-4 text-center font-medium text-gray-800 hidden sm:table-cell">
                <div className="text-lg font-heading font-semibold">
                  {products.sport.name}
                </div>
                <div className="text-base font-normal text-text-secondary">
                  ${products.sport.price}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={feature.name}
                className={index % 2 === 0 ? "bg-ecru-light" : ""}
              >
                <td className="p-4 font-medium text-text-primary font-heading">
                  {feature.name}
                </td>
                <td className="p-4 text-center">
                  {feature.elite ? (
                    <Check className="w-5 h-5 text-text-accent mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-surface-error mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center hidden sm:table-cell">
                  {feature.pro ? (
                    <Check className="w-5 h-5 text-text-accent mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-surface-error mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center hidden sm:table-cell">
                  {feature.sport ? (
                    <Check className="w-5 h-5 text-text-accent mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-surface-error mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 p-4 sm:hidden space-y-8">
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            {products.pro.name} (${products.pro.price})
          </h3>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={`pro-${feature.name}`} className="flex items-center">
                {feature.pro ? (
                  <Check className="w-5 h-5 text-text-accent mr-3 flex-shrink-0" />
                ) : (
                  <X className="w-5 h-5 text-surface-error mr-3 flex-shrink-0" />
                )}
                <span className="text-text-primary">{feature.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            {products.sport.name} (${products.sport.price})
          </h3>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={`sport-${feature.name}`} className="flex items-center">
                {feature.sport ? (
                  <Check className="w-5 h-5 text-text-accent mr-3 flex-shrink-0" />
                ) : (
                  <X className="w-5 h-5 text-surface-error mr-3 flex-shrink-0" />
                )}
                <span className="text-text-primary">{feature.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
