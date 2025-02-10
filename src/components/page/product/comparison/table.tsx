import { Check, X } from "lucide-react";
import { getComparisonTableData } from "@/data/products/helpers/comparison";

const { features, products } = getComparisonTableData();

export default function ComparisonTable() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Desktop Table */}
      <div className="hidden md:block bg-white border border-neutral-200 overflow-hidden">
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

      {/* Mobile Layout */}
      <div className="md:hidden bg-white border border-neutral-200 overflow-hidden">
        <div className="divide-y divide-neutral-200">
          {/* Elite */}
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-heading font-bold text-text-primary">
                {products.elite.name}
              </h3>
              <p className="text-lg text-text-secondary">
                ${products.elite.price}
              </p>
            </div>
            <div className="space-y-4">
              {features.map(
                (feature) =>
                  feature.elite && (
                    <div key={feature.name} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-text-accent flex-shrink-0" />
                      <span className="text-text-primary font-heading">
                        {feature.name}
                      </span>
                    </div>
                  ),
              )}
            </div>
          </div>

          {/* Pro */}
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-heading font-bold text-text-primary">
                {products.pro.name}
              </h3>
              <p className="text-lg text-text-secondary">
                ${products.pro.price}
              </p>
            </div>
            <div className="space-y-4">
              {features.map(
                (feature) =>
                  feature.pro && (
                    <div key={feature.name} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-text-accent flex-shrink-0" />
                      <span className="text-text-primary font-heading">
                        {feature.name}
                      </span>
                    </div>
                  ),
              )}
            </div>
          </div>

          {/* Sport */}
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-heading font-bold text-text-primary">
                {products.sport.name}
              </h3>
              <p className="text-lg text-text-secondary">
                ${products.sport.price}
              </p>
            </div>
            <div className="space-y-4">
              {features.map(
                (feature) =>
                  feature.sport && (
                    <div key={feature.name} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-text-accent flex-shrink-0" />
                      <span className="text-text-primary font-heading">
                        {feature.name}
                      </span>
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
