import React, { useState } from "react";
import { Check } from "lucide-react";
import Advisor from "./advisor";

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductVariant {
  color: string;
  images: ProductImage[];
}

interface Props {
  name: string;
  tagline: string;
  blurb: string;
  hasCellular: boolean;
  availableColors: string[];
  availableSizes: string[];
  variants: Record<string, ProductVariant>;
  price: number;
  withFriction: boolean;
  aiEnabled: boolean;
}

export default function ProductHero({
  name,
  tagline,
  blurb,
  hasCellular,
  availableColors,
  availableSizes,
  variants,
  price,
  withFriction,
  aiEnabled,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    availableColors[0]?.toLowerCase() || "black",
  );
  const [size, setSize] = useState(availableSizes[0] || "38mm");
  const [cellular, setCellular] = useState(hasCellular);

  const currentVariant = variants[selectedColor];

  // Create selected options object for the advisor
  const selectedOptions = {
    productName: name,
    color: variants[selectedColor].color,
    size,
    cellular: hasCellular ? cellular : undefined,
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-20 max-w-7xl">
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
              className="w-full h-full object-cover rounded-lg border-2 border-gray-200"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-blue-600">{tagline}</p>
            <h1 className="text-4xl font-bold mt-2">{name}</h1>
            <p className="mt-4 text-gray-600">{blurb}</p>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-medium mb-3">COLOUR</h3>
            <div className="flex gap-2">
              {availableColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color.toLowerCase())}
                  className={`px-4 py-2 rounded-full border ${
                    selectedColor === color.toLowerCase()
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Face Size Selection */}
          <div>
            <h3 className="font-medium mb-3">FACE SIZE</h3>
            <div className="flex gap-2">
              {availableSizes.map((sizeOption) => (
                <button
                  key={sizeOption}
                  onClick={() => setSize(sizeOption)}
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
          {hasCellular && (
            <div>
              <h3 className="font-medium mb-3">CELLULAR</h3>
              <div className="flex gap-2">
                {[
                  { label: "Yes", value: true },
                  { label: "No", value: false },
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setCellular(option.value)}
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
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2">
              <span>Buy now</span>
              <span className="text-sm opacity-90">£{price}</span>
            </button>
            {aiEnabled && (
              <Advisor
                selectedOptions={selectedOptions}
                withFriction={withFriction}
              />
            )}
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
