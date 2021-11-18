// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string[];
      secondary: string[];
      gray: string[];
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
