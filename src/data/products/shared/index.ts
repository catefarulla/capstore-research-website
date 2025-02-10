export function generateBuyNowButtonText(price: number) {
  if (price === 0 || !price) throw new Error("Price cannot be 0");
  return `Buy now $${price}`;
}

export const advisorButtonText = "Chat to advisor";

const BASE_SURVEY_URL =
  "https://qualtricsxmfkz7rl8n3.qualtrics.com/jfe/form/SV_3DlfLuw5gk5H1Pw";

interface SurveyParams {
  productName?: string;
  price?: number;
  /** Participant ID from Prolific platform */
  PROLIFIC_PID?: string;
  [key: string]: string | number | undefined;
}

export function generateSurveyUrl(params: SurveyParams = {}) {
  const baseUrl = new URL(BASE_SURVEY_URL);
  const url = new URL(baseUrl);

  // Preserve any existing query parameters from BASE_SURVEY_URL
  baseUrl.searchParams.forEach((value, key) => {
    url.searchParams.set(key, value);
  });

  // Add custom query parameters
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  });

  return url.toString();
}

export const purchaseConfirmation = {
  title: "Confirm Purchase",
  description: (productName: string, price: number) =>
    `Are you sure you want to purchase the ${productName} for $${price}?`,
  confirmButton: "Confirm Purchase",
  cancelButton: "Cancel",
} as const;

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
