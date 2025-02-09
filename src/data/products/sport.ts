import type { Product } from "./type";
import { benefits } from "./benefits";

export const sport: Product = {
  name: "Chronos Sport",
  blurb:
    "Built for active lifestyles with enhanced workout features and durable design. The Sport delivers reliable fitness tracking and extended battery life in a lightweight polymer case. Essential for fitness enthusiasts who prioritize performance monitoring and durability.",
  tagline: "LIGHTWEIGHT AND PERFORMANCE-FOCUSED",
  thumbnail: "/products/sport/thumbnail.jpg",
  slug: "sport",
  images: [
    {
      color: "red",
      srcs: [
        "/products/sport/red/1.jpg",
        "/products/sport/red/2.jpg",
        "/products/sport/red/3.jpg",
      ],
    },
    {
      color: "blue",
      srcs: [
        "/products/sport/blue/1.jpg",
        "/products/sport/blue/2.jpg",
        "/products/sport/blue/3.jpg",
      ],
    },
    {
      color: "green",
      srcs: [
        "/products/sport/green/1.jpg",
        "/products/sport/green/2.jpg",
        "/products/sport/green/3.jpg",
      ],
    },
  ],
  availableColors: ["red", "blue", "green"],
  availableSizes: ["40mm"],
  price: 499.99,
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
      image: "/products/sport/features/health-monitoring.jpg",
    },
    {
      subtitle: "PRECISION TRACKING",
      title: "Your Training Partner",
      description:
        "25+ workout modes and enhanced running basics help you track every rep, step, and sprint with accuracy.",
      image: "/products/sport/features/training.jpg",
    },
  ],
  lifestyleImage: "/products/sport/lifestyle.jpg",
};
