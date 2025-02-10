import { palette, shades, surface, text } from "./src/lib/brand";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Jost", "system-ui", "sans-serif"],
        serif: ["IBM Plex Serif", "Georgia", "serif"],
      },
      colors: {
        // Base palette
        cobalt: palette.cobalt,
        scarlet: palette.scarlet,
        "cool-grey": palette.coolGrey,
        ecru: palette.ecru,
        "ecru-light": palette.ecruLight,

        // Shades
        ...Object.entries(shades).reduce(
          (acc, [name, shadeObj]) => ({
            ...acc,
            ...Object.entries(shadeObj).reduce(
              (shadeAcc, [shade, value]) => ({
                ...shadeAcc,
                [`${name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}-${shade}`]:
                  value,
              }),
              {},
            ),
          }),
          {},
        ),

        // Semantic colors
        surface,
        text,
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
