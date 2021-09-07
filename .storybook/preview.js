import { addDecorator } from '@storybook/react';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
/** 
 * This is a workaround for the issue with the storybook preview
 * for the `@chakra-ui/react` package.
  * @example
    <ChakraProvider>
      <CSSReset />
    <Box m={20}>{storyFn()}</Box>
  </ChakraProvider>
 */
addDecorator(storyFn => (
  <ChakraProvider>
    <CSSReset />
    <Box m={20}>{storyFn()}</Box>
  </ChakraProvider>
));
