import React from 'react';
// chakra
import { Container, HStack, Stack, Button, ButtonGroup, IconButton } from '@chakra-ui/react';

// icons
import { RiArrowRightLine, RiMailLine, RiPhoneFill, RiSearchLine } from 'react-icons/ri';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

export default {
  title: 'Buttons/Buttons',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    )
  ]
};

export const withVariants = () => (
  <HStack spacing="24px">
    <Button colorScheme="teal" variant="solid">
      Button
    </Button>
    <Button colorScheme="teal" variant="outline">
      Button
    </Button>
    <Button colorScheme="teal" variant="ghost">
      Button
    </Button>
    <Button colorScheme="teal" variant="link">
      Button
    </Button>
    <Button colorScheme="teal" variant="unstyled">
      Button
    </Button>
  </HStack>
);

export const withSizes = () => (
  <HStack>
    <Button colorScheme="blue" size="xs">
      Button
    </Button>
    <Button colorScheme="blue" size="sm">
      Button
    </Button>
    <Button colorScheme="blue" size="md">
      Button
    </Button>
    <Button colorScheme="blue" size="lg">
      Button
    </Button>
  </HStack>
);

export const WithIcon = () => (
  <Stack direction="row" spacing={4}>
    <Button leftIcon={<RiMailLine />} colorScheme="teal" variant="solid">
      Email
    </Button>
    <Button rightIcon={<RiArrowRightLine />} colorScheme="teal" variant="outline">
      Call us
    </Button>
  </Stack>
);

export const WithLoading = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button size="lg" isLoading colorScheme="teal">
      Email
    </Button>

    <Button isLoading colorScheme="blue">
      Click me
    </Button>

    <Button isLoading loadingText="Submitting..." colorScheme="teal" variant="outline">
      Submit
    </Button>
  </Stack>
);

export const WithLoadingSpinnerPlacement = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button isLoading loadingText="Loading" colorScheme="teal" variant="outline" spinnerPosition="start">
      Submit
    </Button>
    <Button isLoading loadingText="Loading" colorScheme="teal" variant="outline" spinnerPlacement="end">
      Continue
    </Button>
  </Stack>
);

export const withDisabled = () => (
  <HStack spacing="24px">
    <Button isDisabled colorScheme="teal" variant="solid">
      Button
    </Button>
    <Button isDisabled colorScheme="teal" variant="outline">
      Button
    </Button>
    <Button isDisabled colorScheme="teal" variant="ghost">
      Button
    </Button>
    <Button isDisabled colorScheme="teal" variant="link">
      Button
    </Button>
  </HStack>
);

export const customComposition = () => (
  <Button size="md" height="48px" width="200px" border="2px solid" borderColor="green.500">
    Button
  </Button>
);

export const iconButton = () => (
  <Stack direction="row">
    <IconButton aria-label="Search database" icon={<RiSearchLine />} />

    <IconButton colorScheme="blue" aria-label="Search database" icon={<RiSearchLine />} />

    <IconButton colorScheme="teal" aria-label="Call Segun" size="lg">
      <RiPhoneFill size="24px" />
    </IconButton>
  </Stack>
);

export const WithButtonGroup = () => (
  <ButtonGroup variant="outline">
    <Button colorScheme="blue">Save</Button>
    <Button>Cancel</Button>
  </ButtonGroup>
);

export const attachedButtons = () => (
  <ButtonGroup size="sm" isAttached variant="outline">
    <Button marginEnd="-px">Save</Button>
    <IconButton fontSize="2xl" aria-label="Add to friends" icon={<RiArrowRightLine />} />
  </ButtonGroup>
);

export const socialButton = () => (
  <Stack direction="row">
    <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
      Facebook
    </Button>
    <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
      Twitter
    </Button>
  </Stack>
);
