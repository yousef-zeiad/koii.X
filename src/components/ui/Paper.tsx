import { ReactNode } from "react";
import styled from "styled-components";

interface PaperProps {
  bg?: string;
  color?: string;
  p?: string;
  m?: string;
  children: ReactNode;
}

export const PaperWrapper = styled.div.withConfig({
  shouldForwardProp: prop => !["bg", "color", "p", "m"].includes(prop)
})<PaperProps>`
  padding: ${({ theme, p }) => p || theme.space[2]};
  margin: ${({ m }) => m || "0"};
  background-color: ${({ theme, bg }) => (bg ? bg : theme.colors.primary[5])};
  color: ${({ theme, color }) => (color ? color : theme.colors.white)};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const Paper: React.FC<PaperProps> = ({ bg, color, p, m, children }) => {
  return (
    <PaperWrapper bg={bg} color={color} p={p} m={m}>
      {children}
    </PaperWrapper>
  );
};
