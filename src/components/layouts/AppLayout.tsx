import React from "react";
import styled from "styled-components";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return <Main>{children}</Main>;
};
const Main = styled.main`
  height: 100%;
  width: 100%;
`;
