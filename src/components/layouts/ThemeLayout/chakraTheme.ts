import { extendTheme } from '@chakra-ui/react';

// Let's say you want to add custom colors
const chakraTheme = extendTheme({
  // Colors
  colors: {
    blue: {
      '50': '#F4F4FC',
      '100': '#D2D2F3',
      '200': '#8E8EE0',
      '300': '#4A4ACD',
      '400': '#2A2A97',
      '500': '#171753',
      '600': '#131343',
      '700': '#0E0E33',
      '800': '#0A0A23',
      '900': '#050513'
    },
    white: {
      500: '#fff'
    }
  },
  fonts: {
    body: 'Sora, sans-serif',
    heading: 'Sora, sans-serif'
  }
});
export default chakraTheme;
