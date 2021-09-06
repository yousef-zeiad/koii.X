import { addDecorator } from '@storybook/react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
addDecorator(storyFn => (
  <ChakraProvider>
    <CSSReset />
    {storyFn()}
  </ChakraProvider>
));
