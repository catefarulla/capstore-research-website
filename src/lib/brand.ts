export const palette = {
  cobalt: "#3A00FF",
  scarlet: "#FF0100",
  coolGrey: "#D3D7E4",
  white: "#FFFFFF",
  black: "#000000",
  ecru: "#FDF9F6",
  ecruLight: "#FEFAF7",
};

export const shades = {
  cobalt: {
    "50": "#ECEAFF",
    "100": "#D6D1FF",
    "200": "#B4A8FF",
    "300": "#907FFF",
    "400": "#6B40FF",
    "500": "#3A00FF", // base
    "600": "#2E00CC",
    "700": "#230099",
    "800": "#170066",
    "900": "#0C0033",
  },
  scarlet: {
    "50": "#FFF0F0",
    "100": "#FFD7D7",
    "200": "#FFB0B0",
    "300": "#FF8080",
    "400": "#FF4040",
    "500": "#FF0100", // base
    "600": "#CC0100",
    "700": "#990100",
    "800": "#660000",
    "900": "#330000",
  },
  coolGrey: {
    "50": "#F7F8FA",
    "100": "#EBEDF3",
    "200": "#E1E4EC",
    "300": "#D3D7E4", // base
    "400": "#B8BED1",
    "500": "#9CA4BC",
    "600": "#808AA8",
    "700": "#636D89",
    "800": "#4A5166",
    "900": "#313544",
  },
  neutral: {
    "50": "#F9F9F9",
    "100": "#EFEFEF",
    "200": "#DFDFDF",
    "300": "#CCCCCC",
    "400": "#B0B0B0",
    "500": "#909090",
    "600": "#707070",
    "700": "#505050",
    "800": "#303030",
    "900": "#101010",
  },
};

export const surface = {
  primary: shades.neutral["50"],
  secondary: palette.ecru,
  accent: shades.cobalt["500"],
  inverse: palette.black,
  coolGrey: shades.coolGrey["200"],
  muted: shades.neutral["100"],
  subtle: shades.neutral["200"],
  strong: shades.neutral["900"],
  error: shades.scarlet["500"],
  brand: {
    primary: shades.cobalt["500"],
    secondary: shades.scarlet["500"],
    muted: shades.cobalt["100"],
    subtle: shades.cobalt["50"],
  },
};

export const text = {
  primary: palette.black,
  secondary: shades.neutral["600"],
  accent: shades.cobalt["500"],
  inverse: palette.white,
  muted: shades.neutral["400"],
  subtle: shades.neutral["600"],
  strong: shades.neutral["800"],
  error: shades.scarlet["500"],
  brand: {
    primary: shades.cobalt["500"],
    secondary: shades.scarlet["500"],
    muted: shades.cobalt["400"],
    subtle: shades.cobalt["300"],
  },
};

export const fonts = {};
