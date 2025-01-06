import React from "react";
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
  image: string;
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
    image: "https://ourahealth.imgix.net/home/heart-health.jpg",
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
    image: "https://ourahealth.imgix.net/home/activity-fitness.jpg",
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
    image: "https://ourahealth.imgix.net/home/womens-health.jpg",
  },
  // Additional items
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
    image: "https://ourahealth.imgix.net/home/sleep-tracking.jpg",
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
    image: "https://ourahealth.imgix.net/home/recovery.jpg",
  },
];

export default function BenefitsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        dragFree: true,
      }}
      className="w-full max-w-[95%] mx-auto"
    >
      <CarouselContent className="-ml-4">
        {benefits.map((benefit, index) => (
          <CarouselItem
            key={index}
            className="pl-4 basis-[85%] sm:basis-[45%] lg:basis-[33%] cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl group">
              {/* Background Image */}
              <img
                src={benefit.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col">
                {/* Label with Icon */}
                <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm rounded-full py-2 px-4 w-fit">
                  {benefit.icon}
                  <span className="text-sm font-medium">{benefit.label}</span>
                </div>

                {/* Title */}
                <div className="mt-auto">
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
                <button className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white hover:bg-white/90 transition-colors flex items-center justify-center text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M12 5v14m-7-7h14" />
                  </svg>
                </button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-end gap-2 mt-4 px-4">
        <CarouselPrevious className="relative bg-white/10 hover:bg-white/20 border-white/20" />
        <CarouselNext className="relative bg-white/10 hover:bg-white/20 border-white/20" />
      </div>
    </Carousel>
  );
}
