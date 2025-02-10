import type { Product } from "./type";
import { benefits } from "./shared/benefits";
import { r2BaseUrl } from "@/lib/constants";

export const elite: Product = {
  name: "Chronos Elite",
  blurb:
    "Meet our flagship smartwatch with industry-leading battery life and comprehensive health tracking. The Elite combines premium sensors, advanced fitness metrics, and smart features in a sleek aluminum design with Gorilla Glass DX+. Perfect for tech enthusiasts who want the complete package, from ECG monitoring to voice control.",
  tagline: "PRECISION MEETS PREMIUM PERFORMANCE.",
  thumbnail: `${r2BaseUrl}/product/elite/black/png/1.png`,
  slug: "elite",
  images: [
    {
      color: "black",
      srcs: [
        `${r2BaseUrl}/product/elite/black/png/1.png`,
        `${r2BaseUrl}/product/elite/black/png/2.png`,
        `${r2BaseUrl}/product/elite/black/png/3.png`,
      ],
    },
    {
      color: "rose-gold",
      srcs: [
        `${r2BaseUrl}/product/elite/rose-gold/png/1.png`,
        `${r2BaseUrl}/product/elite/rose-gold/png/2.png`,
        `${r2BaseUrl}/product/elite/rose-gold/png/3.png`,
      ],
    },
    {
      color: "silver",
      srcs: [
        `${r2BaseUrl}/product/elite/silver/png/1.png`,
        `${r2BaseUrl}/product/elite/silver/png/2.png`,
        `${r2BaseUrl}/product/elite/silver/png/3.png`,
      ],
    },
  ],
  availableColors: ["black", "rose-gold", "silver"],
  availableSizes: ["38mm", "40mm"],
  price: 499,
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
      image: `${r2BaseUrl}/product/elite/feature-block-1.jpg`,
    },
    {
      subtitle: "PERFORMANCE FOCUSED",
      title: "Personalized Fitness Guidance",
      description:
        "Whether you're training for a marathon or starting your fitness journey, Chronos adapts to your goals. Get real-time metrics, custom workouts, and recovery insights tailored to your performance level.",
      image: `${r2BaseUrl}/product/elite/feature-block-2.jpg`,
    },
  ],
  lifestyleImage: `${r2BaseUrl}/product/elite/lifestyle.jpg`,
};
