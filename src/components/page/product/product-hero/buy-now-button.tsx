import { generateBuyNowButtonText } from "../../../../data/products/shared";

interface BuyNowButtonProps {
  price: number;
}

export default function BuyNowButton({ price }: BuyNowButtonProps) {
  return (
    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2">
      <span>{generateBuyNowButtonText(price)}</span>
    </button>
  );
}
