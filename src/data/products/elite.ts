import type { Product } from "./type";
import { benefits } from "./shared/benefits";

export const elite: Product = {
  name: "Chronos Elite",
  blurb:
    "Meet our flagship smartwatch with industry-leading battery life and comprehensive health tracking. The Elite combines premium sensors, advanced fitness metrics, and smart features in a sleek aluminum design with Gorilla Glass DX+. Perfect for tech enthusiasts who want the complete package, from ECG monitoring to voice control.",
  tagline: "PRECISION MEETS PREMIUM PERFORMANCE.",
  thumbnail:
    "https://placehold.co/600/1a1a1a/ffffff?text=Chronos+Elite&font=montserrat",
  slug: "elite",
  images: [
    {
      color: "blue",
      srcs: [
        "https://placehold.co/600/000066/ffffff?text=Elite+Blue+1&font=montserrat",
        "https://placehold.co/600/000066/ffffff?text=Elite+Blue+2&font=montserrat",
        "https://placehold.co/600/000066/ffffff?text=Elite+Blue+3&font=montserrat",
      ],
    },
    {
      color: "pink",
      srcs: [
        "https://placehold.co/600/ff69b4/ffffff?text=Elite+Pink+1&font=montserrat",
        "https://placehold.co/600/ff69b4/ffffff?text=Elite+Pink+2&font=montserrat",
        "https://placehold.co/600/ff69b4/ffffff?text=Elite+Pink+3&font=montserrat",
      ],
    },
    {
      color: "purple",
      srcs: [
        "https://placehold.co/600/800080/ffffff?text=Elite+Purple+1&font=montserrat",
        "https://placehold.co/600/800080/ffffff?text=Elite+Purple+2&font=montserrat",
        "https://placehold.co/600/800080/ffffff?text=Elite+Purple+3&font=montserrat",
      ],
    },
  ],
  availableColors: ["pink", "blue", "purple"],
  availableSizes: ["38mm", "40mm"],
  price: 299.99,
  cellularOptionAvailable: true,
  benefits: [
    benefits.wristHeartRate,
    benefits.sleepTracking,
    benefits.batteryLife4Day,
    benefits.builtInGps,
    benefits.premiumHeartSensor,
    benefits.ecgSensor,
    benefits.temperatureSensor,
    benefits.spo2Sensor,
    benefits.stressTracking,
    benefits.workoutModes40Plus,
    benefits.advancedRunningMetrics,
    benefits.recoveryTimeAdvisor,
    benefits.trainingLoadFocus,
    benefits.smartNotifications,
    benefits.musicStorage,
    benefits.nfcPayments,
    benefits.voiceAssistant,
    benefits.fitnessAgeCalculator,
    benefits.waterResistance5atm,
    benefits.customWorkoutCreation,
    benefits.racePredictor,
  ],
  centreTextBlock: {
    title: "Transform Your Journey. Experience Next-Level Performance.",
    description:
      "Discover precision tracking and personalized guidance with Chronos. Our advanced sensors, comprehensive workout tracking, and intelligent health monitoring adapt to your lifestyle.",
  },
  featureBlocks: [
    {
      subtitle: "INTELLIGENT TRACKING",
      title: "Advanced Health Monitoring",
      description:
        "From heart rate variability to sleep stages, our sophisticated sensors provide detailed insights into your wellbeing. Make informed decisions about your health with comprehensive data at your fingertips.",
      image:
        "https://placehold.co/600/1a1a1a/ffffff?text=Elite+Health+Monitoring&font=montserrat",
    },
    {
      subtitle: "PERFORMANCE FOCUSED",
      title: "Personalized Fitness Guidance",
      description:
        "Whether you're training for a marathon or starting your fitness journey, Chronos adapts to your goals. Get real-time metrics, custom workouts, and recovery insights tailored to your performance level.",
      image:
        "https://placehold.co/600/1a1a1a/ffffff?text=Elite+Fitness+Guidance&font=montserrat",
    },
  ],
  lifestyleImage:
    "https://placehold.co/1600x900/1a1a1a/ffffff?text=Elite+Lifestyle&font=montserrat",
};
