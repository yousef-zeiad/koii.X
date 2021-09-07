import { extendTheme } from '@chakra-ui/react';

// Let's say you want to add custom colors
const chakraTheme = extendTheme({
  // Colors
  colors: {
    blue: {
      900: '#070B14',
      800: '#0A111E',
      700: '#0D1728',
      600: '#14223C',
      500: '#162643',
      400: '#5C677B',
      300: '#A2A8B4',
      200: '#C5C9D0',
      100: '#E8E9EC',
      50: '#F3F4F6'
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
