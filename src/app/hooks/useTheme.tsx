import { useEffect, useState } from "react";

export type Theme = "dark" | "light" | "system";

export const useTheme = () => {
  const THEME_LOCAL_STORAGE_KEY = "theme";
  const DEFAULT_THEME: Theme = "system";

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";

    const themeInLocalStorage = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
    return themeInLocalStorage ? (themeInLocalStorage as Theme) : DEFAULT_THEME;
  });

  const changeBodyClassBasedOnTheme = (newTheme: Theme) => {
    switch (newTheme) {
      case "dark":
        document.body.classList.add("dark");
        break;
      case "light":
        document.body.classList.remove("dark");
        break;
      case "system":
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (prefersDark) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    changeBodyClassBasedOnTheme(theme);
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        changeBodyClassBasedOnTheme(
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
        );
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};
