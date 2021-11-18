import { DefaultTheme } from "styled-components";

const sx = {
  0: "0px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};

const theme: DefaultTheme = {
  colors: {
    primary: ["#7676D9", "#6262D4", "#3A3AC9", "#2D2DA3", "#22227B", "#171753", "#131343", "#0E0E33", "#0A0A23", "#050513"],
    secondary: ["#A0E4DF", "#8CDED9", "#64D3CB", "#3CC8BE", "#2EA39B", "#237B75", "#1B5F5B", "#134340", "#0B2826", "#030C0B"],
    gray: ["#F9FAFB", "#F3F4F6", "#E5E7EB", "#D1D5DB", "#9CA3AF", "#6B7280", "#4B5563", "#374151", "#1F2937", "#111827"],
    white: "#fff",
    black: "#000"
  },
  space: sx,
  fonts: {
    body: "IBM Plex Sans, sans-serif",
    display: "IBM Plex Sans, sans-serif"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.9rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "1.825rem"
  },
  fontWeights: {
    light: 200,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  lineHeights: {
    body: 1.2,
    heading: 1.1
  },
  borders: {
    none: "none",
    thin: "1px solid"
  },
  rounded: {
    ...sx,
    full: "9999px"
  }
};

export interface ThemeProps {
  theme: typeof theme;
}

export { theme };
