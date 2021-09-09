import { extendTheme } from '@chakra-ui/react';
import { Component } from 'react';

// Let's say you want to add custom colors
const chakraTheme = extendTheme({
  // Colors
  colors: {
    brand: {
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
    // brand: {
    //   '50': '#EDFEF9',
    //   '100': '#C5FDED',
    //   '200': '#76FAD5',
    //   '300': '#27F8BD',
    //   '400': '#07C790',
    //   '500': '#047857',
    //   '600': '#035A42',
    //   '700': '#023D2C',
    //   '800': '#011F17',
    //   '900': '#000201'
    // },
    blue: {
      900: '#1E3A8A',
      800: '#1E40AF',
      700: '#1D4ED8',
      600: '#2563EB',
      500: '#3B82F6',
      400: '#60A5FA',
      300: '#93C5FD',
      200: '#BFDBFE',
      100: '#DBEAFE',
      50: '#EFF6FF'
    },
    gray: {
      '50': '#FAFAFA',
      '100': '#F4F4F5',
      '200': '#E4E4E7',
      '300': '#D4D4D8',
      '400': '#A1A1AA',
      '500': '#71717A',
      '600': '#52525B',
      '700': '#3F3F46',
      '800': '#27272A',
      '900': '#18181B'
    },
    white: {
      500: '#fff'
    }
  },
  fonts: {
    body: 'Inter, sans-serif',
    display: 'Inter, sans-serif'
  },

  // Components
  components: {
    Input: {
      defaultProps: {
        variant: 'filled',
        color: 'brand.500'
      },
      variants: {
        filled: {
          field: {
            bg: 'white',
            color: 'brand.500',
            _hover: { bg: 'white' },
            _focus: { bg: 'white' }
          }
        }
      }
    }
  }
});
export default chakraTheme;
