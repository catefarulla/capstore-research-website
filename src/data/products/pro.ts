import type { Product } from "./type";
import { benefits } from "./benefits";

export const pro: Product = {
  name: "Chronos Pro",
  blurb:
    "Your dedicated health companion with advanced wellness monitoring and smart functionality. The Pro balances comprehensive health tracking with essential fitness features in a refined aluminum case. Ideal for health-conscious users seeking detailed insights into their wellbeing.",
  tagline: "SMART AND VERSATILE",
  thumbnail:
    "https://placehold.co/600/004d99/ffffff?text=Chronos+Pro&font=montserrat",
  slug: "pro",
  images: [
    {
      color: "blue",
      srcs: [
        "https://placehold.co/600/0066cc/ffffff?text=Pro+Blue+1&font=montserrat",
        "https://placehold.co/600/0066cc/ffffff?text=Pro+Blue+2&font=montserrat",
        "https://placehold.co/600/0066cc/ffffff?text=Pro+Blue+3&font=montserrat",
      ],
    },
    {
      color: "pink",
      srcs: [
        "https://placehold.co/600/ff69b4/ffffff?text=Pro+Pink+1&font=montserrat",
        "https://placehold.co/600/ff69b4/ffffff?text=Pro+Pink+2&font=montserrat",
        "https://placehold.co/600/ff69b4/ffffff?text=Pro+Pink+3&font=montserrat",
      ],
    },
    {
      color: "purple",
      srcs: [
        "https://placehold.co/600/800080/ffffff?text=Pro+Purple+1&font=montserrat",
        "https://placehold.co/600/800080/ffffff?text=Pro+Purple+2&font=montserrat",
        "https://placehold.co/600/800080/ffffff?text=Pro+Purple+3&font=montserrat",
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
      image:
        "https://placehold.co/600/004d99/ffffff?text=Pro+Health+Monitoring&font=montserrat",
    },
    {
      subtitle: "SMART ASSISTANCE",
      title: "Seamless Integration",
      description:
        "NFC payments and smart notifications keep you connected while maintaining focus on your wellbeing.",
      image:
        "https://placehold.co/600/004d99/ffffff?text=Pro+Smart+Features&font=montserrat",
    },
  ],
  lifestyleImage:
    "https://placehold.co/1600x900/004d99/ffffff?text=Pro+Lifestyle&font=montserrat",
};
