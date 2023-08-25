import classNames from "classnames";
import { usePathname } from "next/navigation";
import type { DetailedHTMLProps, LiHTMLAttributes } from "react";
import { useRef, useState } from "react";
import {
  MdComputer,
  MdDarkMode,
  MdLightMode,
  MdOutlineDarkMode,
} from "react-icons/md";
import { useOnClickOutside } from "src/app/hooks/useOnClickOutside";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../hooks/useTheme";

const ThemeSwitcherSubMenuItem = ({
  className = "",
  children,
  isActive,
  ...props
}: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> & {
  isActive: boolean;
}) => {
  return (
    <li
      {...props}
      className={twMerge(
        classNames({
          "w-40 py-3 hover:bg-slate-200 dark:hover:bg-slate-800": true,
          [className]: true,
          "font-semibold text-primary": isActive,
        })
      )}
    >
      <div className="flex justify-between px-4">{children}</div>
    </li>
  );
};

export const ThemeSwitcher = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathName = usePathname();

  const toggle = () => setIsActive((val) => !val);

  const close = () => setIsActive(false);

  useOnClickOutside(ref, close);

  const setThemeToDark = () => {
    setTheme("dark");
    close();
  };

  const setThemeToLight = () => {
    setTheme("light");
    close();
  };

  const setThemeToSystem = () => {
    setTheme("system");
    close();
  };

  return (
    <div className="relative" ref={ref}>
      {theme === "dark" && (
        <MdDarkMode onClick={toggle} className="cursor-pointer text-3xl" />
      )}

      {theme === "light" && (
        <MdLightMode onClick={toggle} className="cursor-pointer text-3xl" />
      )}

      {theme === "system" && (
        <MdOutlineDarkMode
          onClick={toggle}
          className="cursor-pointer text-3xl"
        />
      )}

      {isActive && (
        <ul
          className={classNames({
            "text-black bg-white dark:bg-darkGray dark:text-white rounded-xl cursor-pointer shadow-lg":
              true,
            "absolute top-10 -left-36": isActive,
            "md:dark:bg-black": pathName === "/",
          })}
        >
          <ThemeSwitcherSubMenuItem
            isActive={theme === "dark"}
            onClick={setThemeToDark}
            className="rounded-t-xl"
          >
            <span>Dark</span>
            <MdDarkMode className="text-2xl" />
          </ThemeSwitcherSubMenuItem>

          <ThemeSwitcherSubMenuItem
            isActive={theme === "light"}
            onClick={setThemeToLight}
          >
            <span>Light</span>
            <MdLightMode className="text-2xl" />
          </ThemeSwitcherSubMenuItem>

          <ThemeSwitcherSubMenuItem
            isActive={theme === "system"}
            onClick={setThemeToSystem}
            className="rounded-b-xl"
          >
            <span>System</span>
            <MdComputer className="text-2xl" />
          </ThemeSwitcherSubMenuItem>
        </ul>
      )}
    </div>
  );
};
