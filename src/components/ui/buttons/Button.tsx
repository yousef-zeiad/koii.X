import React from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  children: React.ReactNode;
  size: SizeProps;
  [key: string]: any;
}

interface SizeProps {
  size?: "sm" | "md" | "lg";
}

const sizeStyles = ({ size, theme }: SizeProps & any) => {
  return {
    sm: css`
      padding: ${theme.space(4)} ${theme.space(2)};
    `
  }[size || "md"];
};

const StyledButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid;
  border-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.rounded[2]};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-decoration: none;
  ${sizeStyles}
  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    outline: 0;
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.6;
  }
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ type = "button", children, ...restProps }, ref) => {
  return (
    <StyledButton ref={ref} type={type} {...restProps}>
      {children}
    </StyledButton>
  );
});
