import { defineCollection } from "astro:content";
import { airtableLoader } from "@ascorbic/airtable-loader";

const products = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE_ID,
    token: import.meta.env.AIRTABLE_ACCESS_TOKEN,
    table: "Products",
  }),
});

const benefits = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE_ID,
    token: import.meta.env.AIRTABLE_ACCESS_TOKEN,
    table: "Benefits",
  }),
});

const colors = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE_ID,
    token: import.meta.env.AIRTABLE_ACCESS_TOKEN,
    table: "Colours",
  }),
});

const sizes = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE_ID,
    token: import.meta.env.AIRTABLE_ACCESS_TOKEN,
    table: "Sizes",
  }),
});

export const collections = {
  products,
  benefits,
  colors,
  sizes,
};
