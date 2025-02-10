export type GeneralBenefit = {
  tag: string;
  title: string;
  description: string;
  icon: string;
};

type GeneralBenefits = {
  [K: string]: GeneralBenefit;
};

export const generalBenefits: GeneralBenefits = {
  heartRate: {
    tag: "HeartRate",
    title: "Wrist-Based Heart Rate",
    description:
      "Track your heart rate 24/7 and get alerts when it falls outside your set range.",
    icon: "heart-pulse",
  },
  runningMetrics: {
    tag: "RunningMetrics",
    title: "Basic Running Metrics",
    description:
      "Stay on pace with real-time tracking of distance, speed, and time.",
    icon: "activity-square",
  },
  ecg: {
    tag: "ECG",
    title: "ECG Sensor",
    description: "Detect irregular heart rhythms with on-demand ECG readings.",
    icon: "activity",
  },
  tempSensor: {
    tag: "TempSensor",
    title: "Temperature Sensor",
    description:
      "Monitor skin temperature trends to better understand your body's signals.",
    icon: "thermometer",
  },
  recoveryAdvisor: {
    tag: "RecoveryAdvisor",
    title: "Recovery Advisor",
    description:
      "Personalized recommendations to help you train smarter and recover better.",
    icon: "heart-handshake",
  },
  spO2: {
    tag: "SpO2",
    title: "SpO2 Sensor",
    description:
      "Measure your blood oxygen levels during sleep and workouts to optimize performance.",
    icon: "heart",
  },
  wellnessScore: {
    tag: "WellnessScore",
    title: "Wellness Score",
    description:
      "A daily score based on your activity, sleep, and stress levels to keep you balanced.",
    icon: "gauge",
  },
  batteryLife: {
    tag: "BatteryLife",
    title: "Long Battery Life",
    description:
      "Stay connected longer with a battery that lasts through your toughest days.",
    icon: "battery-charging",
  },
  safety: {
    tag: "Safety",
    title: "Basic Safety Features",
    description:
      "Stay protected with automatic incident detection and emergency alerts.",
    icon: "shield",
  },
  waterResistance: {
    tag: "WaterResistance",
    title: "2ATM Water Resistance",
    description:
      "Built to withstand water up to 20m, so you can train, swim, and explore worry-free.",
    icon: "droplet",
  },
  trainingStatus: {
    tag: "TrainingStatus",
    title: "Training Status",
    description:
      "Know if you're pushing your limits, maintaining progress, or overreaching.",
    icon: "trending-up",
  },
  sleepTracking: {
    tag: "SleepTracking",
    title: "Sleep Tracking",
    description:
      "Understand your sleep cycles, quality, and trends to wake up feeling your best.",
    icon: "moon",
  },
  workoutModes: {
    tag: "WorkoutModes",
    title: "30+ Workout Modes",
    description:
      "From HIIT to hiking, track performance across 30+ exercise types.",
    icon: "dumbbell",
  },
  nfcPayments: {
    tag: "NFCPayments",
    title: "NFC Payments",
    description: "Make secure contactless payments straight from your wrist.",
    icon: "credit-card",
  },
  fitnessAge: {
    tag: "FitnessAge",
    title: "Fitness Age Calculator",
    description:
      "See how your fitness age compares to your actual age and track your progress.",
    icon: "calendar",
  },
};

export const getGeneralBenefitsArray = () => Object.values(generalBenefits);

// Helper function to format benefits for the carousel
export const getCarouselBenefits = () => {
  const benefits = getGeneralBenefitsArray();
  return benefits.map((benefit) => {
    // Split the title into sans and serif parts if it contains a period
    const titleParts = benefit.title.split(".");
    return {
      icon: benefit.icon,
      label: benefit.tag,
      title: {
        sans: titleParts[0],
        serif: titleParts[1] || undefined,
      },
      description: benefit.description,
    };
  });
};
