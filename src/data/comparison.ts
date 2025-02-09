import { elite } from "./products/elite";
import { pro } from "./products/pro";
import { sport } from "./products/sport";

export interface ComparisonFeature {
  name: string;
  elite: boolean;
  pro: boolean;
  sport: boolean;
}

export interface ProductInfo {
  name: string;
  price: number;
}

export interface ComparisonData {
  features: ComparisonFeature[];
  products: {
    elite: ProductInfo;
    pro: ProductInfo;
    sport: ProductInfo;
  };
}

export const getComparisonTableData = (): ComparisonData => {
  // Get all unique benefit titles
  const allBenefits = new Set([
    ...elite.benefits.map((b) => b.title),
    ...pro.benefits.map((b) => b.title),
    ...sport.benefits.map((b) => b.title),
  ]);

  // Create comparison features array
  const features = Array.from(allBenefits).map((benefitTitle) => {
    const hasElite = elite.benefits.some((b) => b.title === benefitTitle);
    const hasPro = pro.benefits.some((b) => b.title === benefitTitle);
    const hasSport = sport.benefits.some((b) => b.title === benefitTitle);

    return {
      name: benefitTitle,
      elite: hasElite,
      pro: hasPro,
      sport: hasSport,
    };
  });

  return {
    features,
    products: {
      elite: {
        name: elite.name,
        price: elite.price,
      },
      pro: {
        name: pro.name,
        price: pro.price,
      },
      sport: {
        name: sport.name,
        price: sport.price,
      },
    },
  };
};
