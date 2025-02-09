import { getAllProducts } from "../products/helpers";
import { getComparisonTableData } from "../products/helpers/comparison";
import type { Product } from "../products/type";

// Helper functions for extracting product details
function findBenefitByKeyword(benefits: Product["benefits"], keyword: string) {
  return (
    benefits.find((b) => b.title.toLowerCase().includes(keyword))?.title ||
    "Not specified"
  );
}

function formatFeatureList(features: string[]) {
  return features.map((feature) => `• ${feature}`).join("\n");
}

function formatProductSpecs(product: Product) {
  return `• Cellular Option: ${product.cellularOptionAvailable ? "Available" : "Not Available"}
• Available Colors: ${product.availableColors.join(", ")}
• Available Sizes: ${product.availableSizes.join(", ")}
• Water Resistance: ${findBenefitByKeyword(product.benefits, "atm")}
• Battery Life: ${findBenefitByKeyword(product.benefits, "battery")}`;
}

// Generate formatted product details
function formatProductDetails(product: Product, features: string[]) {
  return `
PRODUCT: ${product.name} (${product.tagline})
────────────────────────────────────────────────
Price: £${product.price}
Overview: ${product.blurb}

SPECIFICATIONS:
${formatProductSpecs(product)}

KEY FEATURES:
${formatFeatureList(features)}`;
}

// Main catalog generation function
export function generateProductCatalog() {
  const products = getAllProducts();
  const comparisonData = getComparisonTableData();
  const separator = "\n────────────────────────────────────────────────\n";

  return products
    .map((product) => {
      const productFeatures = comparisonData.features
        .filter((f) => f[product.slug as "elite" | "pro" | "sport"])
        .map((f) => f.name);

      return formatProductDetails(product, productFeatures);
    })
    .join(separator);
}
