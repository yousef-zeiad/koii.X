import * as React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import chakraTheme from './chakraTheme';

// fonts
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

interface ThemeLayoutProps {
  children: React.ReactNode;
}

export function ThemeLayout(props: ThemeLayoutProps) {
  const { children } = props;
  return (
    <ChakraProvider theme={chakraTheme}>
      <CSSReset />
      {children}
    </ChakraProvider>
  );
}
