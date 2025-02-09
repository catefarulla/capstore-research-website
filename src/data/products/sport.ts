import type { Product } from "./type";
import { benefits } from "./benefits";

export const sport: Product = {
  name: "Chronos Sport",
  blurb:
    "Built for active lifestyles with enhanced workout features and durable design. The Sport delivers reliable fitness tracking and extended battery life in a lightweight polymer case. Essential for fitness enthusiasts who prioritize performance monitoring and durability.",
  tagline: "LIGHTWEIGHT AND PERFORMANCE-FOCUSED",
  thumbnail:
    "https://placehold.co/600/00cc00/ffffff?text=Chronos+Sport&font=montserrat",
  slug: "sport",
  images: [
    {
      color: "red",
      srcs: [
        "https://placehold.co/600/ff0000/ffffff?text=Sport+Red+1&font=montserrat",
        "https://placehold.co/600/ff0000/ffffff?text=Sport+Red+2&font=montserrat",
        "https://placehold.co/600/ff0000/ffffff?text=Sport+Red+3&font=montserrat",
      ],
    },
    {
      color: "blue",
      srcs: [
        "https://placehold.co/600/0066cc/ffffff?text=Sport+Blue+1&font=montserrat",
        "https://placehold.co/600/0066cc/ffffff?text=Sport+Blue+2&font=montserrat",
        "https://placehold.co/600/0066cc/ffffff?text=Sport+Blue+3&font=montserrat",
      ],
    },
    {
      color: "green",
      srcs: [
        "https://placehold.co/600/00cc00/ffffff?text=Sport+Green+1&font=montserrat",
        "https://placehold.co/600/00cc00/ffffff?text=Sport+Green+2&font=montserrat",
        "https://placehold.co/600/00cc00/ffffff?text=Sport+Green+3&font=montserrat",
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
      image:
        "https://placehold.co/600/00cc00/ffffff?text=Sport+Performance&font=montserrat",
    },
    {
      subtitle: "PRECISION TRACKING",
      title: "Your Training Partner",
      description:
        "25+ workout modes and enhanced running basics help you track every rep, step, and sprint with accuracy.",
      image:
        "https://placehold.co/600/00cc00/ffffff?text=Sport+Training&font=montserrat",
    },
  ],
  lifestyleImage:
    "https://placehold.co/1600x900/00cc00/ffffff?text=Sport+Lifestyle&font=montserrat",
};
