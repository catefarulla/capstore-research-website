export function generateBuyNowButtonText(price: number) {
  if (price === 0 || !price) throw new Error("Price cannot be 0");
  return `Buy now ${price}`;
}

export const advisorButtonText = "Chat to advisor";

export const guarantees = [
  "30 Day Money Back Gurantee",
  "Express Shipping Worldwide",
  "2 Year Warranty",
  "Import duties & VAT included",
];

export const selectionLabels = {
  color: "COLOUR",
  faceSize: "FACE SIZE",
  cellular: "CELLULAR",
} as const;
