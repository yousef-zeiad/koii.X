import React from "react";

// ui
// import { Nav, Footer } from 'components/common';
interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = children => {
  return <>{children}</>;
};
