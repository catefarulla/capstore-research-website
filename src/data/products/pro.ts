import type { Product } from "./type";
import { benefits } from "./benefits";

export const pro: Product = {
  name: "Chronos Pro",
  blurb:
    "Your dedicated health companion with advanced wellness monitoring and smart functionality. The Pro balances comprehensive health tracking with essential fitness features in a refined aluminum case. Ideal for health-conscious users seeking detailed insights into their wellbeing.",
  tagline: "SMART AND VERSATILE",
  thumbnail: "/products/pro/thumbnail.jpg",
  slug: "pro",
  images: [
    {
      color: "blue",
      srcs: [
        "/products/pro/blue/1.jpg",
        "/products/pro/blue/2.jpg",
        "/products/pro/blue/3.jpg",
      ],
    },
    {
      color: "pink",
      srcs: [
        "/products/pro/pink/1.jpg",
        "/products/pro/pink/2.jpg",
        "/products/pro/pink/3.jpg",
      ],
    },
    {
      color: "purple",
      srcs: [
        "/products/pro/purple/1.jpg",
        "/products/pro/purple/2.jpg",
        "/products/pro/purple/3.jpg",
      ],
    },
  ],
  availableColors: ["pink", "blue", "purple"],
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
      image: "/products/pro/features/health-monitoring.jpg",
    },
    {
      subtitle: "SMART ASSISTANCE",
      title: "Seamless Integration",
      description:
        "NFC payments and smart notifications keep you connected while maintaining focus on your wellbeing.",
      image: "/products/pro/features/training.jpg",
    },
  ],
  lifestyleImage: "/products/pro/lifestyle.jpg",
};
