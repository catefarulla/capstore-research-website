import { getAllProducts } from "../products/helpers";
import { getComparisonTableData } from "../products/helpers/comparison";

// Generate product catalog
function generateProductCatalog() {
  const products = getAllProducts();
  const comparisonData = getComparisonTableData();

  // Get all unique features for comparison
  return products
    .map((product) => {
      // Get feature availability for this product
      const productFeatures = comparisonData.features
        .filter((f) => f[product.slug as "elite" | "pro" | "sport"])
        .map((f) => f.name);

      return `
PRODUCT: ${product.name} (${product.tagline})
────────────────────────────────────────────────
Price: £${product.price}
Overview: ${product.blurb}

SPECIFICATIONS:
• Cellular Option: ${product.cellularOptionAvailable ? "Available" : "Not Available"}
• Available Colors: ${product.availableColors.join(", ")}
• Available Sizes: ${product.availableSizes.join(", ")}
• Water Resistance: ${product.benefits.find((b) => b.title.includes("ATM"))?.title || "Not specified"}
• Battery Life: ${product.benefits.find((b) => b.title.includes("battery"))?.title || "Standard"}

KEY FEATURES:
${productFeatures.map((feature) => `• ${feature}`).join("\n")}
`;
    })
    .join("\n────────────────────────────────────────────────\n");
}

// Shared content blocks
export const COMPANY_INFO = `
Chronos is a premium smartwatch manufacturer focused on delivering high-quality, feature-rich wearables.
Our products combine cutting-edge technology with elegant design, offering:

- Advanced health and fitness tracking
- Premium build quality and materials
- Extensive customization options
- Industry-leading battery life
- Seamless integration with smartphones
`;

export const PRODUCT_CATALOG = generateProductCatalog();

// Generate the base system prompt that both modes will use
export const BASE_SYSTEM_PROMPT = `
You are a helpful assistant that can help users choose the best smartwatch for their needs.

ABOUT THE COMPANY:
${COMPANY_INFO}

PRODUCT CATALOG:
${PRODUCT_CATALOG}
`;
