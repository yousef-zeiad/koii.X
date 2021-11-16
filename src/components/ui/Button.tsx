import React from "react";
import styled, { css } from "styled-components";
import { ThemeProps } from "theme";

interface SizeProps {
  size?: "sm" | "md" | "lg";
}
interface ColorProps {
  color?: "primary" | "secondary";
}
interface ButtonProps extends SizeProps, ColorProps, ThemeProps {
  children: React.ReactNode;
  m?: string;
  p?: string;
  [key: string]: any;
}

const sizeStyles = ({ size, theme }: SizeProps & ThemeProps) => {
  return {
    sm: css`
      padding: ${theme.space[1.5]} ${theme.space[2.5]};
      font-size: ${theme.fontSizes["sm"]};
    `,
    md: css`
      padding: ${theme.space[2]} ${theme.space[3]};
      font-size: ${theme.fontSizes["md"]};
    `,
    lg: css`
      padding: ${theme.space[2]} ${theme.space[4]};
      font-size: ${theme.fontSizes["lg"]};
    `
  }[size || "md"];
};

const colorStyles = ({ color = "primary", theme }: ColorProps & ThemeProps) => {
  return {
    [color]: css`
      background-color: ${theme.colors[color][5]};
      &:hover {
        background-color: ${theme.colors[color][6]};
      }
      &:focus {
        box-shadow: rgba(59, 130, 246, 0.4) 0px 0px 0px 3px;
      }
    `
  }[color || "primary"];
};

const spacingStyles = ({ m, p }: ButtonProps) => {
  return css`
    margin: ${m};
    padding: ${p};
  `;
};

const StyledButton = styled.button.withConfig({
  shouldForwardProp: prop => !["color", "size", "m", "isLoading", "isDisabled"].includes(prop)
})`
  /* Defaults  */
  box-sizing: border-box;
  display: inline-flex;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.rounded[1]};
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
    cursor: not-allowed;
  }
  ${colorStyles}
  ${sizeStyles}
  ${spacingStyles}
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ type = "button", isDisabled, children, ...restProps }, ref) => {
  return (
    <StyledButton ref={ref} type={type} disabled={isDisabled} {...restProps}>
      {children}
    </StyledButton>
  );
});
