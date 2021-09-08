import React from 'react';
// ui
import { Nav } from 'components/common';
interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout(props: AppLayoutProps) {
  const { children } = props;

  return (
    <>
      <Nav />
      {children}
    </>
  );
}
