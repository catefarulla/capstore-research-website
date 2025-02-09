import { elite } from "../elite";
import { pro } from "../pro";
import { sport } from "../sport";
import type { Product } from "../type";

export type ProductListItem = {
  title: string;
  price: number;
  href: string;
  image: string;
};

export const getProductListData = (): ProductListItem[] => {
  return [
    {
      title: elite.name,
      price: elite.price,
      href: `/product/${elite.slug}`,
      image: elite.thumbnail,
    },
    {
      title: pro.name,
      price: pro.price,
      href: `/product/${pro.slug}`,
      image: pro.thumbnail,
    },
    {
      title: sport.name,
      price: sport.price,
      href: `/product/${sport.slug}`,
      image: sport.thumbnail,
    },
  ];
};

export const getProductBySlug = (slug: string): Product | undefined => {
  switch (slug) {
    case elite.slug:
      return elite;
    case pro.slug:
      return pro;
    case sport.slug:
      return sport;
    default:
      return undefined;
  }
};

export const getAllProducts = (): Product[] => {
  return [elite, pro, sport];
};

// Helper to format product data for the product hero component
export type ProductHeroData = {
  name: string;
  tagline: string;
  blurb: string;
  hasCellular: boolean;
  availableColors: string[];
  availableSizes: string[];
  variants: Record<
    string,
    {
      color: string;
      images: { src: string; alt: string }[];
    }
  >;
  price: number;
};

export const getProductHeroData = (product: Product): ProductHeroData => {
  const variants = product.images.reduce(
    (acc, { color, srcs }) => {
      acc[color.toLowerCase()] = {
        color,
        images: srcs.map((src, index) => ({
          src,
          alt: `${color} ${product.name} - View ${index + 1}`,
        })),
      };
      return acc;
    },
    {} as ProductHeroData["variants"],
  );

  return {
    name: product.name,
    tagline: product.tagline,
    blurb: product.blurb,
    hasCellular: product.cellularOptionAvailable,
    availableColors: product.availableColors,
    availableSizes: product.availableSizes,
    variants,
    price: product.price,
  };
};
