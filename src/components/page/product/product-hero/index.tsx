import { useState } from "react";
import { Check } from "lucide-react";
import Advisor from "../../../advisor";
import SelectionButton from "./selection-button";
import ProductGallery from "./product-gallery";
import {
  generateBuyNowButtonText,
  guarantees,
  selectionLabels,
} from "../../../../data/products/shared";

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
        <ProductGallery
          images={currentVariant.images}
          selectedImage={selectedImage}
          onImageSelect={setSelectedImage}
        />

        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-blue-600">{tagline}</p>
            <h1 className="text-4xl font-bold mt-2">{name}</h1>
            <p className="mt-4 text-gray-600">{blurb}</p>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-medium mb-3">{selectionLabels.color}</h3>
            <div className="flex gap-2">
              {availableColors.map((color) => (
                <SelectionButton
                  key={color}
                  selected={selectedColor === color.toLowerCase()}
                  onClick={() => setSelectedColor(color.toLowerCase())}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1).toLowerCase()}
                </SelectionButton>
              ))}
            </div>
          </div>

          {/* Face Size Selection */}
          <div>
            <h3 className="font-medium mb-3">{selectionLabels.faceSize}</h3>
            <div className="flex gap-2">
              {availableSizes.map((sizeOption) => (
                <SelectionButton
                  key={sizeOption}
                  selected={size === sizeOption}
                  onClick={() => setSize(sizeOption)}
                >
                  {sizeOption}
                </SelectionButton>
              ))}
            </div>
          </div>

          {/* Cellular Option */}
          {hasCellular && (
            <div>
              <h3 className="font-medium mb-3">{selectionLabels.cellular}</h3>
              <div className="flex gap-2">
                {[
                  { label: "Yes", value: true },
                  { label: "No", value: false },
                ].map((option) => (
                  <SelectionButton
                    key={option.label}
                    selected={cellular === option.value}
                    onClick={() => setCellular(option.value)}
                  >
                    {option.label}
                  </SelectionButton>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2">
              <span>{generateBuyNowButtonText(price)}</span>
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
            {guarantees.map((feature: string) => (
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
