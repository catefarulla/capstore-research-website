import type { Product } from "./type";
import { benefits } from "./shared/benefits";
import { r2BaseUrl } from "@/lib/constants";

export const sport: Product = {
  name: "Chronos Sport",
  blurb:
    "Built for active lifestyles with enhanced workout features and durable design. The Sport delivers reliable fitness tracking and extended battery life in a lightweight polymer case. Essential for fitness enthusiasts who prioritize performance monitoring and durability.",
  tagline: "LIGHTWEIGHT AND PERFORMANCE-FOCUSED",
  thumbnail: `${r2BaseUrl}/product/sport/green/png/1.png`,
  slug: "sport",
  images: [
    {
      color: "red",
      srcs: [
        `${r2BaseUrl}/product/sport/red/png/1.png`,
        `${r2BaseUrl}/product/sport/red/png/2.png`,
        `${r2BaseUrl}/product/sport/red/png/3.png`,
      ],
    },
    {
      color: "blue",
      srcs: [
        `${r2BaseUrl}/product/sport/blue/png/1.png`,
        `${r2BaseUrl}/product/sport/blue/png/2.png`,
        `${r2BaseUrl}/product/sport/blue/png/3.png`,
      ],
    },
    {
      color: "green",
      srcs: [
        `${r2BaseUrl}/product/sport/green/png/1.png`,
        `${r2BaseUrl}/product/sport/green/png/2.png`,
        `${r2BaseUrl}/product/sport/green/png/3.png`,
      ],
    },
  ],
  availableColors: ["red", "blue", "green"],
  availableSizes: ["40mm"],
  price: 299.99,
  cellularOptionAvailable: false,
  benefits: [
    benefits.wristHeartRate,
    benefits.batteryLife2Day,
    benefits.builtInGps,
    benefits.waterResistance5atm,
    benefits.workoutModes25Plus,
    benefits.enhancedRunningBasics,
    benefits.recoverySuggestions,
    benefits.autoWorkoutDetection,
    benefits.gorillaGlass,
  ],
  centreTextBlock: {
    title: "Transform Your Performance. With Precision.",
    description:
      "Built for active lifestyles with enhanced workout features and durable design. The Sport delivers reliable fitness tracking and extended battery life in a lightweight polymer case. Essential for fitness enthusiasts who prioritize performance monitoring and durability.",
  },
  featureBlocks: [
    {
      subtitle: "DESIGNED FOR ENDURANCE",
      title: "Performance That Lasts",
      description:
        "Our lightweight polymer case and optimized battery management deliver up to 1.8 days of continuous tracking, so you never miss a workout.",
      image: `${r2BaseUrl}/product/sport/feature-block-1.jpg`,
    },
    {
      subtitle: "PRECISION TRACKING",
      title: "Your Training Partner",
      description:
        "25+ workout modes and enhanced running basics help you track every rep, step, and sprint with accuracy.",
      image: `${r2BaseUrl}/product/sport/feature-block-2.jpg`,
    },
  ],
  lifestyleImage: `${r2BaseUrl}/product/sport/lifestyle.jpg`,
};
