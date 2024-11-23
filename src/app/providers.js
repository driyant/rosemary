"use client";

import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./extendTheme";

export function Providers({ children }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      {children}
    </ChakraProvider>
  );
}
