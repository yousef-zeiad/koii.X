import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';

interface ButtonProps {
  size: string | any;
  colorScheme: string;
}

const CustomButton: FC<ButtonProps> = ({ size, colorScheme }) => (
  <Button colorScheme={colorScheme} size={size}>
    Button
  </Button>
);

export default CustomButton;
