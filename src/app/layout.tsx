"use client";

import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>SeungChan ProtFolio</title>
      </head>
      <body>
        <nav>
          <StyledComponentsRegistry>
            {/* <Layout /> */}
          </StyledComponentsRegistry>
        </nav>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
