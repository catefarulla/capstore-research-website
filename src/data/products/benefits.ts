import type { Benefit } from "./type";

type Benefits = {
  [K: string]: Benefit;
};

export const benefits: Benefits = {
  wristHeartRate: {
    title: "Wrist based heart rate",
    description:
      "Continuously monitors your heart rate and alerts you when it falls outside your preset range",
    icon: "heart-pulse",
  },
  sleepTracking: {
    title: "Sleep tracking",
    description:
      "Analyzes your sleep patterns, stages, and quality to help optimize your rest",
    icon: "moon",
  },
  builtInGps: {
    title: "Built in GPS",
    description:
      "Precisely tracks your route, pace, and distance without needing your phone",
    icon: "map-pin",
  },
  batteryLife4Day: {
    title: "4-day battery life",
    description:
      "Long-lasting battery keeps you tracking for up to 4 days between charges",
    icon: "battery-charging",
  },
  batteryLife2Day: {
    title: "2-day battery life",
    description:
      "Long-lasting battery keeps you tracking for up to 2 days between charges",
    icon: "battery",
  },
  premiumHeartSensor: {
    title: "Premium PPG heart sensor",
    description:
      "Advanced optical sensor provides medical-grade heart rate accuracy",
    icon: "activity",
  },
  ecgSensor: {
    title: "ECG Sensor",
    description:
      "Records your heart's electrical signals to detect irregular rhythms",
    icon: "heart",
  },
  temperatureSensor: {
    title: "Temperature Sensor",
    description: "Tracks skin temperature variations to monitor health trends",
    icon: "thermometer",
  },
  spo2Sensor: {
    title: "SpO2 Sensor",
    description: "Measures blood oxygen levels during sleep and workouts",
    icon: "lungs",
  },
  stressTracking: {
    title: "Stress Tracking Sensor",
    description: "Monitors heart rate variability to detect stress levels",
    icon: "brain",
  },
  workoutModes40Plus: {
    title: "40+ workout modes",
    description: "Tracks detailed metrics for over 40 different activities",
    icon: "dumbbell",
  },
  advancedRunningMetrics: {
    title: "Advanced running metrics",
    description:
      "Analyzes stride length, cadence, ground contact time and more",
    icon: "running",
  },
  recoveryTimeAdvisor: {
    title: "Recovery time advisor",
    description: "Recommends rest periods based on workout intensity",
    icon: "timer",
  },
  trainingLoadFocus: {
    title: "Training load focus",
    description: "Monitors workout intensity and volume to optimize training",
    icon: "bar-chart",
  },
  smartNotifications: {
    title: "Smart notifications",
    description: "Displays calls, messages and app alerts from your phone",
    icon: "bell",
  },
  musicStorage: {
    title: "Music storage (500 songs)",
    description: "Store and play up to 500 songs directly from your watch",
    icon: "music",
  },
  nfcPayments: {
    title: "NFC payments",
    description: "Make secure contactless payments without your wallet",
    icon: "credit-card",
  },
  voiceAssistant: {
    title: "Voice assistant",
    description: "Control your watch and smart home devices hands-free",
    icon: "mic",
  },
  workoutModes30Plus: {
    title: "30+ workout modes",
    description: "Track metrics for 30 different exercise types",
    icon: "activity",
  },
  recoveryAdvisor: {
    title: "Recovery advisor",
    description: "Get personalized recovery recommendations",
    icon: "heart-handshake",
  },
  basicRunningMetrics: {
    title: "Basic running metrics",
    description: "Tracks essential stats like pace, distance and time",
    icon: "footprints",
  },
  trainingStatus: {
    title: "Training status",
    description:
      "Shows if you're training productively, maintaining or overreaching",
    icon: "trending-up",
  },
  fitnessAgeCalculator: {
    title: "Fitness age calculator",
    description: "Estimates your fitness age based on performance metrics",
    icon: "calculator",
  },
  waterResistance5atm: {
    title: "5ATM water resistance",
    description: "Water resistant up to 50m depth",
    icon: "droplets",
  },
  waterResistance2atm: {
    title: "2ATM water resistance",
    description: "Water resistant up to 20m depth",
    icon: "droplet",
  },
  workoutModes25Plus: {
    title: "25+ workout modes",
    description: "Tracks basic metrics for 25 different activities",
    icon: "activity",
  },
  enhancedRunningBasics: {
    title: "Enhanced running basics",
    description: "Monitors pace, distance, time and heart rate zones",
    icon: "running",
  },
  recoverySuggestions: {
    title: "Recovery suggestions",
    description: "Basic recovery guidance based on activity level",
    icon: "bed",
  },
  customWorkoutCreation: {
    title: "Custom workout creation",
    description: "Design and follow custom training plans",
    icon: "clipboard-list",
  },
  racePredictor: {
    title: "Race performance predictor",
    description: "Estimates race times based on training data",
    icon: "timer",
  },
  wellnessScore: {
    title: "Wellness score",
    description: "Daily score based on activity, sleep and stress levels",
    icon: "gauge",
  },
  basicSafetyFeatures: {
    title: "Basic safety features",
    description: "Emergency contact alerts if incident detected",
    icon: "shield",
  },
  autoWorkoutDetection: {
    title: "Auto workout detection",
    description: "Automatically recognizes and tracks common activities",
    icon: "zap",
  },
  gorillaGlass: {
    title: "Gorilla Glass",
    description: "Durable scratch-resistant display protection",
    icon: "shield-check",
  },
} as const;

// Helper function to get all benefits as an array (for components that need array format)
export const getBenefitsArray = () => Object.values(benefits);
