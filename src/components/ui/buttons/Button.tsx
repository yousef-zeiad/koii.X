import React from "react";
import styled from "@emotion/styled";
import css from "@emotion/css";
import { theme } from "theme";

interface ThemeProps {
  theme: typeof theme;
}
interface ButtonProps extends SizeProps, ColorProps, ThemeProps {
  children: React.ReactNode;
  [key: string]: any;
}

interface SizeProps {
  size?: "sm" | "md" | "lg";
}
interface ColorProps {
  color?: "primary" | "secondary";
}

const sizeStyles = ({ size, theme }: SizeProps & ThemeProps) => {
  return {
    sm: css`
      padding: ${theme.space[1]} ${theme.space[2]};
      font-size: ${theme.fontSizes["sm"]};
    `,
    md: css`
      padding: ${theme.space[3]} ${theme.space[4]};
      font-size: ${theme.fontSizes["md"]};
    `,
    lg: css`
      padding: ${theme.space[4]} ${theme.space[6]};
      font-size: ${theme.fontSizes["lg"]};
    `
  }[size || "md"];
};

const colorStyles = ({ color = "primary", theme }: ColorProps & ThemeProps) => {
  return {
    [color]: css`
      background-color: ${theme.colors[color]};
    `
  }[color || "primary"];
};

const StyledButton = styled.button`
  /* Defaults  */
  box-sizing: border-box;
  display: inline-flex;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.rounded[2]};
  font-family: ${({ theme }) => theme.fonts.body};
  text-decoration: none;
  outline: none;
  border: none;
  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    outline: 0;
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.6;
  }
  /* Sizings & Colors */
  ${colorStyles}
  ${sizeStyles}
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ type = "button", children, ...restProps }, ref) => {
  return (
    <StyledButton ref={ref} type={type} {...restProps}>
      {children}
    </StyledButton>
  );
});
