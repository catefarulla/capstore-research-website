import { Check, X } from "lucide-react";
import { getComparisonTableData } from "@/data/products/helpers/comparison";

const { features, products } = getComparisonTableData();

export default function ComparisonTable() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="w-full overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-4 text-left font-medium text-gray-600"></th>
              <th className="p-4 text-center font-medium text-gray-800">
                <div className="text-lg">{products.elite.name}</div>
                <div className="text-base font-normal text-gray-600">
                  ${products.elite.price}
                </div>
              </th>
              <th className="p-4 text-center font-medium text-gray-800 hidden sm:table-cell">
                <div className="text-lg">{products.pro.name}</div>
                <div className="text-base font-normal text-gray-600">
                  ${products.pro.price}
                </div>
              </th>
              <th className="p-4 text-center font-medium text-gray-800 hidden sm:table-cell">
                <div className="text-lg">{products.sport.name}</div>
                <div className="text-base font-normal text-gray-600">
                  ${products.sport.price}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={feature.name}
                className={index % 2 === 0 ? "bg-gray-50/50" : ""}
              >
                <td className="p-4 font-medium text-gray-700">
                  {feature.name}
                </td>
                <td className="p-4 text-center">
                  {feature.elite ? (
                    <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center hidden sm:table-cell">
                  {feature.pro ? (
                    <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center hidden sm:table-cell">
                  {feature.sport ? (
                    <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 mx-auto" />
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
                  <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                ) : (
                  <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                )}
                <span className="text-gray-700">{feature.name}</span>
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
                  <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                ) : (
                  <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                )}
                <span className="text-gray-700">{feature.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
