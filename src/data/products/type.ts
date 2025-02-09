export type Images = {
  color: Color;
  srcs: string[];
};

type Color = "blue" | "green" | "red" | "pink" | "purple";
type Size = "38mm" | "40mm" | "42mm" | "44mm";

type FeatureBlock = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};
type CentreBlock = {
  title: string;
  description: string;
};

export type Benefit = {
  title: string;
  description: string;
  icon: string;
};

export type Product = {
  name: string;
  slug: string;
  blurb: string;
  tagline: string;
  thumbnail: string;
  images: Images[];
  availableColors: Color[];
  availableSizes: Size[];
  price: number;
  cellularOptionAvailable: boolean;
  benefits: Benefit[];
  centreTextBlock: CentreBlock;
  featureBlocks: FeatureBlock[];
  lifestyleImage: string;
};
