import React, { useState } from "react";
import { Check } from "lucide-react";
import {
  useQueryState,
  useQueryStates,
  parseAsString,
  parseAsBoolean,
} from "nuqs";

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductVariant {
  color: string;
  images: ProductImage[];
}

// Product data
const productVariants: Record<string, ProductVariant> = {
  black: {
    color: "Black",
    images: [
      {
        src: "/placeholder.svg?height=600&width=600&text=Black-1",
        alt: "Black Lily 2 Active - View 1",
      },
      {
        src: "/placeholder.svg?height=600&width=600&text=Black-2",
        alt: "Black Lily 2 Active - View 2",
      },
      {
        src: "/placeholder.svg?height=600&width=600&text=Black-3",
        alt: "Black Lily 2 Active - View 3",
      },
    ],
  },
  pink: {
    color: "Pink",
    images: [
      {
        src: "/placeholder.svg?height=600&width=600&text=Pink-1",
        alt: "Pink Lily 2 Active - View 1",
      },
      {
        src: "/placeholder.svg?height=600&width=600&text=Pink-2",
        alt: "Pink Lily 2 Active - View 2",
      },
      {
        src: "/placeholder.svg?height=600&width=600&text=Pink-3",
        alt: "Pink Lily 2 Active - View 3",
      },
    ],
  },
  blue: {
    color: "Blue",
    images: [
      {
        src: "/placeholder.svg?height=600&width=600&text=Blue-1",
        alt: "Blue Lily 2 Active - View 1",
      },
      {
        src: "/placeholder.svg?height=600&width=600&text=Blue-2",
        alt: "Blue Lily 2 Active - View 2",
      },
      {
        src: "/placeholder.svg?height=600&width=600&text=Blue-3",
        alt: "Blue Lily 2 Active - View 3",
      },
    ],
  },
};

export default function ProductHero() {
  const [selectedImage, setSelectedImage] = useState(0);

  const [selectedColor, setSelectedColor] = useQueryState(
    "color",
    parseAsString.withDefault("black"),
  );
  const [{ size, cellular }, setOptions] = useQueryStates({
    size: parseAsString.withDefault("38mm"),
    cellular: parseAsBoolean.withDefault(false),
  });

  const currentVariant = productVariants[selectedColor];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="flex gap-4 w-full max-w-2xl mx-auto lg:mx-0">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {currentVariant.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 border-2 rounded-lg overflow-hidden ${
                  selectedImage === index
                    ? "border-blue-500"
                    : "border-gray-200"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative flex-1 aspect-square">
            <img
              src={currentVariant.images[selectedImage].src}
              alt={currentVariant.images[selectedImage].alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-blue-600">
              LIGHTWEIGHT AND AFFORDABLE
            </p>
            <h1 className="text-4xl font-bold mt-2">Lily 2 Active</h1>
            <p className="mt-4 text-gray-600">
              Kelvin is a cost effective, smart electric heater, designed to
              help you reduce energy consumption, save money and live more
              sustainably. Comes included with a truly wireless smart thermostat
              and access to the Boldr Energy mobile app. Simple to install, with
              zero maintenance.
            </p>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-medium mb-3">COLOUR</h3>
            <div className="flex gap-2">
              {Object.entries(productVariants).map(([key, variant]) => (
                <button
                  key={key}
                  onClick={() => setSelectedColor(key)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedColor === key
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  {variant.color}
                </button>
              ))}
            </div>
          </div>

          {/* Face Size Selection */}
          <div>
            <h3 className="font-medium mb-3">FACE SIZE</h3>
            <div className="flex gap-2">
              {["38mm", "40mm"].map((sizeOption) => (
                <button
                  key={sizeOption}
                  onClick={() => setOptions({ size: sizeOption })}
                  className={`px-4 py-2 rounded-full border ${
                    size === sizeOption
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  {sizeOption}
                </button>
              ))}
            </div>
          </div>

          {/* Cellular Option */}
          <div>
            <h3 className="font-medium mb-3">CELLULAR</h3>
            <div className="flex gap-2">
              {[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ].map((option) => (
                <button
                  key={option.label}
                  onClick={() => setOptions({ cellular: option.value })}
                  className={`px-4 py-2 rounded-full border ${
                    cellular === option.value
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy now
            </button>
            <button className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Chat to advisor
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            {[
              "30 Day Money Back Gurantee",
              "Express Shipping Worldwide",
              "2 Year Warranty",
              "Import duties & VAT included",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
