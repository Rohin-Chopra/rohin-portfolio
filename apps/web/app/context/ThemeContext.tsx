"use client";

import { createContext, type PropsWithChildren } from "react";

import { useTheme } from "@/hooks/useTheme";

const ThemeContext = createContext(1);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  useTheme();

  return <ThemeContext.Provider value={1}>{children}</ThemeContext.Provider>;
};
