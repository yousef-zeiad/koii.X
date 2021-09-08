import React from 'react';
import { Flex, Grid, Image, IconButton, Button, LinkBox, Icon } from '@chakra-ui/react';
// icons
import { WhiteLogo } from 'assets/icons';
// CSS
// import styles from './index.module.scss';

export function Nav() {
  return (
    <Flex as="nav" w="100%" h="60px" px={[2, 4, 10]} justify="space-between" alignItems="center" borderBottomWidth="1px" bg="blue.500">
      <WhiteLogo boxSize="40px" />
    </Flex>
  );
}
