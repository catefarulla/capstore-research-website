import type { SelectedOptions } from "@/components/advisor/types";

export const generateInitialMessage = (selectedOptions: SelectedOptions) => {
  const { productName } = selectedOptions;
  return `Looks like you're interested in the ${productName}. Is there anything you'd like to ask me about this product?`;
};
