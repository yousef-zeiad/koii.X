declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
    };
    space: {
      [key: string]: any;
    };
    fonts: {
      body: string;
      display: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontWeights: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    borders: {
      none: string;
      thin: string;
    };
    rounded: {
      [key: string]: any;
    };
  }
}

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

export const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#000",
    white: "#fff",
    black: "#000"
  },
  space: sx,
  fonts: {
    body: "Inter, Helvetica, sans-serif",
    display: "Inter, Helvetica, sans-serif"
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
