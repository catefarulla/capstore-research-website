import type { Product } from "./type";
import { benefits } from "./benefits";

export const elite: Product = {
  name: "Chronos Elite",
  blurb:
    "Meet our flagship smartwatch with industry-leading battery life and comprehensive health tracking. The Elite combines premium sensors, advanced fitness metrics, and smart features in a sleek aluminum design with Gorilla Glass DX+. Perfect for tech enthusiasts who want the complete package, from ECG monitoring to voice control.",
  tagline: "PRECISION MEETS PREMIUM PERFORMANCE.",
  thumbnail: "/products/elite/thumbnail.jpg",
  slug: "elite",
  images: [
    {
      color: "blue",
      srcs: [
        "/products/elite/blue/1.jpg",
        "/products/elite/blue/2.jpg",
        "/products/elite/blue/3.jpg",
      ],
    },
    {
      color: "pink",
      srcs: [
        "/products/elite/pink/1.jpg",
        "/products/elite/pink/2.jpg",
        "/products/elite/pink/3.jpg",
      ],
    },
    {
      color: "purple",
      srcs: [
        "/products/elite/purple/1.jpg",
        "/products/elite/purple/2.jpg",
        "/products/elite/purple/3.jpg",
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
      image: "/products/elite/features/health-monitoring.jpg",
    },
    {
      subtitle: "PERFORMANCE FOCUSED",
      title: "Personalized Fitness Guidance",
      description:
        "Whether you're training for a marathon or starting your fitness journey, Chronos adapts to your goals. Get real-time metrics, custom workouts, and recovery insights tailored to your performance level.",
      image: "/products/elite/features/training.jpg",
    },
  ],
  lifestyleImage: "/products/elite/lifestyle.jpg",
};
