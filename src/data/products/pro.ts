import type { Product } from "./type";
import { benefits } from "./shared/benefits";
import { r2BaseUrl } from "@/lib/constants";

export const pro: Product = {
  name: "Chronos Pro",
  blurb:
    "Your dedicated health companion with advanced wellness monitoring and smart functionality. The Pro balances comprehensive health tracking with essential fitness features in a refined aluminum case. Ideal for health-conscious users seeking detailed insights into their wellbeing.",
  tagline: "SMART AND VERSATILE",
  thumbnail: `${r2BaseUrl}/product/pro/blue/png/1.png`,
  slug: "pro",
  images: [
    {
      color: "blue",
      srcs: [
        `${r2BaseUrl}/product/pro/blue/png/1.png`,
        `${r2BaseUrl}/product/pro/blue/png/2.png`,
        `${r2BaseUrl}/product/pro/blue/png/3.png`,
      ],
    },
    {
      color: "brown",
      srcs: [
        `${r2BaseUrl}/product/pro/brown/png/1.png`,
        `${r2BaseUrl}/product/pro/brown/png/2.png`,
        `${r2BaseUrl}/product/pro/brown/png/3.png`,
      ],
    },
    {
      color: "black",
      srcs: [
        `${r2BaseUrl}/product/pro/black/png/1.png`,
        `${r2BaseUrl}/product/pro/black/png/2.png`,
        `${r2BaseUrl}/product/pro/black/png/3.png`,
      ],
    },
  ],
  availableColors: ["blue", "brown", "black"],
  availableSizes: ["40mm", "42mm"],
  price: 399.99,
  cellularOptionAvailable: false,
  benefits: [
    benefits.wristHeartRate,
    benefits.sleepTracking,
    benefits.batteryLife2Day,
    benefits.ecgSensor,
    benefits.temperatureSensor,
    benefits.spo2Sensor,
    benefits.workoutModes30Plus,
    benefits.recoveryAdvisor,
    benefits.basicRunningMetrics,
    benefits.trainingStatus,
    benefits.fitnessAgeCalculator,
    benefits.waterResistance2atm,
    benefits.wellnessScore,
    benefits.nfcPayments,
    benefits.basicSafetyFeatures,
  ],
  centreTextBlock: {
    title: "Advanced Health. Simplified.",
    description:
      "Your dedicated health companion with advanced wellness monitoring and smart functionality. The Pro balances comprehensive health tracking with essential fitness features in a refined aluminum case, making health optimization intuitive and accessible.",
  },
  featureBlocks: [
    {
      subtitle: "INTELLIGENT HEALTH MONITORING",
      title: "Complete Wellness Tracking",
      description:
        "Advanced sensors monitor ECG, temperature, and SpO2 for comprehensive health",
      image: `${r2BaseUrl}/product/pro/feature-block-1.jpg`,
    },
    {
      subtitle: "SMART ASSISTANCE",
      title: "Seamless Integration",
      description:
        "NFC payments and smart notifications keep you connected while maintaining focus on your wellbeing.",
      image: `${r2BaseUrl}/product/elite/feature-block-2.jpg`,
    },
  ],
  lifestyleImage: `${r2BaseUrl}/product/pro/lifestyle.jpg`,
};
