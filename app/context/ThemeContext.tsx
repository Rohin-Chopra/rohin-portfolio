"use client";

import { useTheme } from "@/hooks/useTheme";
import type { PropsWithChildren } from "react";
import { createContext } from "react";

const ThemeContext = createContext(1);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  useTheme();

  return <ThemeContext.Provider value={1}>{children}</ThemeContext.Provider>;
};
