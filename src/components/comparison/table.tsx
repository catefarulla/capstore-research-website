import { Check, X } from "lucide-react";

interface Feature {
  name: string;
  elite: boolean;
  pro: boolean;
  sport: boolean;
}

const features: Feature[] = [
  { name: "Wrist-based Heart Rate", elite: true, pro: true, sport: true },
  { name: "Advanced Running Metrics", elite: true, pro: false, sport: false },
  { name: "Basic Running Metrics", elite: false, pro: true, sport: true },
  { name: "5ATM Water Resistance", elite: true, pro: false, sport: true },
  { name: "ECG Sensor", elite: true, pro: true, sport: false },
  { name: "Temperature Sensor", elite: true, pro: true, sport: false },
  { name: "Smart Notifications", elite: true, pro: true, sport: false },
  { name: "SpO2 Sensor", elite: true, pro: true, sport: false },
  { name: "Voice Assistant", elite: true, pro: false, sport: false },
  { name: "4-Day Battery Life", elite: true, pro: false, sport: false },
  { name: "2-Day Battery Life", elite: false, pro: true, sport: true },
  { name: "40+ Workout Modes", elite: true, pro: true, sport: false },
  { name: "25+ Workout Modes", elite: false, pro: false, sport: true },
  { name: "Built-in GPS", elite: true, pro: true, sport: true },
  { name: "Music Storage (500 songs)", elite: true, pro: false, sport: false },
  { name: "NFC Payments", elite: true, pro: true, sport: false },
  { name: "Fitness Age Calculator", elite: true, pro: true, sport: false },
  { name: "Recovery Time Advisor", elite: true, pro: false, sport: false },
  { name: "Stress Tracking Sensor", elite: true, pro: false, sport: false },
  { name: "Auto Workout Detection", elite: false, pro: false, sport: true },
  { name: "Gorilla Glass", elite: false, pro: false, sport: true },
];

export default function ComparisonTable() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="w-full overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-4 text-left font-medium text-gray-600"></th>
              <th className="p-4 text-center font-medium text-gray-800">
                <div className="text-lg">Chronos Elite</div>
                <div className="text-base font-normal text-gray-600">$299</div>
              </th>
              <th className="p-4 text-center font-medium text-gray-800 hidden sm:table-cell">
                <div className="text-lg">Chronos Pro</div>
                <div className="text-base font-normal text-gray-600">$289</div>
              </th>
              <th className="p-4 text-center font-medium text-gray-800 hidden sm:table-cell">
                <div className="text-lg">Chronos Sport</div>
                <div className="text-base font-normal text-gray-600">$279</div>
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
            Chronos Pro ($289)
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
            Chronos Sport ($279)
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
