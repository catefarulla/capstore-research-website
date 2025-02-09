import React, { useState } from "react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { getCarouselBenefits } from "@/data/general-benefits";

const benefits = getCarouselBenefits();

export default function BenefitsCarousel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getIconComponent = (iconName: string) => {
    // Convert kebab-case to PascalCase for the icon name
    const pascalCaseName = iconName
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("") as keyof typeof Icons;
    const IconComponent = Icons[pascalCaseName] as LucideIcon;
    return IconComponent ? <IconComponent className="w-4 h-4" /> : null;
  };

  return (
    <div className="relative overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-[calc(100%+240px)] md:w-[calc(100%+500px)] ml-4 md:ml-8"
      >
        <CarouselContent className="-ml-4">
          {benefits.map((benefit, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-[45%] md:basis-[calc(30%)]"
            >
              <div
                className="relative h-[400px] overflow-hidden rounded-3xl group cursor-pointer"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIndex(activeIndex === index ? null : index);
                  }
                }}
              >
                {/* Gradient Background */}
                <div
                  className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background:
                      index % 3 === 0
                        ? "linear-gradient(225deg, #162761 0%, #090f24 100%)"
                        : index % 3 === 1
                          ? "linear-gradient(225deg, #124024 0%, #091c10 100%)"
                          : "linear-gradient(225deg, #641919 0%, #240909 100%)",
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Description Overlay */}
                {activeIndex === index && (
                  <div
                    className="absolute inset-0 bg-black/95 p-6 flex flex-col justify-center items-start transition-all duration-300"
                    aria-label="Details"
                  >
                    <p className="text-white/90 text-lg leading-relaxed text-left">
                      {benefit.description}
                    </p>
                  </div>
                )}

                {/* Content */}
                <div className="relative h-full p-4 md:p-8 flex flex-col">
                  {/* Label with Icon */}
                  <div className="flex items-center gap-2 justify-center text-white/90 bg-white/10 backdrop-blur-sm rounded-full py-1.5 px-3 w-fit">
                    <div className="w-4 h-4">
                      {getIconComponent(benefit.icon)}
                    </div>
                    <span className="text-xs font-medium">{benefit.label}</span>
                  </div>

                  {/* Title */}
                  <div
                    className={`mt-auto transition-opacity duration-300 ${
                      activeIndex === index ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <h3 className="text-white">
                      <span className="block text-xl md:text-3xl font-sans font-light leading-tight">
                        {benefit.title.sans}
                      </span>
                      {benefit.title.serif && (
                        <span className="block text-2xl md:text-3xl font-serif italic leading-tight">
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
                    className={`absolute top-4 right-4 md:top-8 md:right-8 w-8 h-8 rounded-full bg-white hover:bg-white/90 transition-all flex items-center justify-center text-black z-50 ${
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
