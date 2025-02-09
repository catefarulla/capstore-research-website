import { generateProductCatalog } from "./helpers";

// Company information
export const COMPANY_INFO = `
Chronos is a premium smartwatch manufacturer focused on delivering high-quality, feature-rich wearables.
Our products combine cutting-edge technology with elegant design, offering:

- Advanced health and fitness tracking
- Premium build quality and materials
- Extensive customization options
- Seamless integration with smartphones
`;

// Generate and export the product catalog
export const PRODUCT_CATALOG = generateProductCatalog();

// Base system prompt template
export const BASE_SYSTEM_PROMPT = `
You are a helpful assistant that can help users choose the best smartwatch for their needs.

ABOUT THE COMPANY:
${COMPANY_INFO}

- Industry-leading battery life
PRODUCT CATALOG:
${PRODUCT_CATALOG}
`;
