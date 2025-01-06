import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type Benefit = {
  icon: React.ReactNode;
  label: string;
  title: {
    sans: string;
    serif?: string;
  };
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
    ),
    label: "Heart Health",
    title: {
      sans: "Listen to what your heart is ",
      serif: "telling you",
    },
    description:
      "Track your heart rate variability, resting heart rate, and other vital metrics to understand your cardiovascular health better.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.421a6 6 0 0 1 3.176 -10.215z" />
      </svg>
    ),
    label: "Activity and Fitness",
    title: {
      sans: "Bring your fitness goals ",
      serif: "into focus",
    },
    description:
      "Monitor your daily activity, workout intensity, and recovery needs to optimize your training and reach your fitness goals.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
        <path d="M12 15l0 6" />
        <path d="M9 18l6 0" />
      </svg>
    ),
    label: "Women's Health",
    title: {
      sans: "Understand the ins and outs of ",
      serif: "women's health",
    },
    description:
      "Get insights into your menstrual cycle, fertility window, and overall reproductive health with personalized tracking and predictions.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9z" />
        <path d="M12 3a9 9 0 0 1 9 9" />
        <path d="M12 3a9 9 0 0 0-9 9" />
        <path d="M12 3v18" />
      </svg>
    ),
    label: "Sleep Tracking",
    title: {
      sans: "Optimize your sleep for ",
      serif: "better recovery",
    },
    description:
      "Analyze your sleep stages, duration, and quality to improve your rest and wake up feeling refreshed.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M3 12h4l3 8l4-16l3 8h4" />
      </svg>
    ),
    label: "Recovery",
    title: {
      sans: "Track your daily ",
      serif: "readiness score",
    },
    description:
      "Understand your body's recovery status and get personalized recommendations for training and rest.",
  },
];

export default function BenefitsCarousel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-[calc(100%+240px)] md:w-[calc(100%+400px)] ml-4 md:ml-8"
      >
        <CarouselContent className="-ml-4">
          {benefits.map((benefit, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-[85%] md:basis-[calc(42%-1rem)] cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl group">
                {/* Background Image */}
                <img
                  src="https://ourahealth.imgix.net/home/OR3-bfcm.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=3840&s=3aa4dcf4f6b3dbedd3d326402307de1b"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Description Overlay */}
                {activeIndex === index && (
                  <div
                    className="absolute inset-0 bg-black/95 p-6 flex flex-col justify-center items-start transition-all duration-300"
                    aria-label="Details"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-4 h-4 text-white">{benefit.icon}</div>
                      <span className="text-xs font-medium text-white">
                        {benefit.label}
                      </span>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed text-left">
                      {benefit.description}
                    </p>
                  </div>
                )}

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col">
                  {/* Label with Icon */}
                  <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm rounded-full py-1.5 px-3 w-fit">
                    <div className="w-4 h-4">{benefit.icon}</div>
                    <span className="text-xs font-medium">{benefit.label}</span>
                  </div>

                  {/* Title */}
                  <div
                    className={`mt-auto transition-opacity duration-300 ${activeIndex === index ? "opacity-0" : "opacity-100"}`}
                  >
                    <h3 className="text-white">
                      <span className="block text-3xl md:text-4xl font-sans font-light leading-tight">
                        {benefit.title.sans}
                      </span>
                      {benefit.title.serif && (
                        <span className="block text-3xl md:text-4xl font-serif italic leading-tight">
                          {benefit.title.serif}
                        </span>
                      )}
                    </h3>
                  </div>

                  {/* Plus Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(activeIndex === index ? null : index);
                    }}
                    className={`absolute top-8 right-8 w-8 h-8 rounded-full bg-white hover:bg-white/90 transition-all flex items-center justify-center text-black z-50 ${
                      activeIndex === index ? "rotate-45 transform" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M12 5v14m-7-7h14" />
                    </svg>
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-1 mt-8 absolute right-8 bottom-0">
          <CarouselPrevious className="relative bg-white/10 hover:bg-white/20 border-white/20" />
          <CarouselNext className="relative bg-white/10 hover:bg-white/20 border-white/20" />
        </div>
      </Carousel>
    </div>
  );
}
