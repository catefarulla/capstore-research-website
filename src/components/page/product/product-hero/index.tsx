import { useState } from "react";
import { Check } from "lucide-react";
import Advisor from "../../../advisor";
import ProductGallery from "./product-gallery";
import BuyNowButton from "./buy-now-button";
import SelectionButtonsList from "./selection-buttons-list";
import { guarantees, selectionLabels } from "../../../../data/products/shared";

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

          <SelectionButtonsList
            label={selectionLabels.color}
            options={availableColors.map((color) => ({
              key: color,
              value: color.toLowerCase(),
              label:
                color.charAt(0).toUpperCase() + color.slice(1).toLowerCase(),
            }))}
            selectedValue={selectedColor}
            onSelect={(value) => setSelectedColor(value as string)}
          />

          <SelectionButtonsList
            label={selectionLabels.faceSize}
            options={availableSizes.map((size) => ({
              key: size,
              value: size,
              label: size,
            }))}
            selectedValue={size}
            onSelect={(value) => setSize(value as string)}
          />

          {hasCellular && (
            <SelectionButtonsList
              label={selectionLabels.cellular}
              options={[
                { key: "yes", value: true, label: "Yes" },
                { key: "no", value: false, label: "No" },
              ]}
              selectedValue={cellular}
              onSelect={(value) => setCellular(value as boolean)}
            />
          )}

          <div className="space-y-3">
            <BuyNowButton price={price} />
            {aiEnabled && (
              <Advisor
                selectedOptions={selectedOptions}
                withFriction={withFriction}
              />
            )}
          </div>

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
