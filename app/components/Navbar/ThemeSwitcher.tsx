import classNames from "classnames";
import type { DetailedHTMLProps, LiHTMLAttributes } from "react";
import {
  MdComputer,
  MdDarkMode,
  MdLightMode,
  MdOutlineDarkMode,
} from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../hooks/useTheme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

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
  const { theme, setTheme } = useTheme();

  const setThemeToDark = () => {
    setTheme("dark");
  };

  const setThemeToLight = () => {
    setTheme("light");
  };

  const setThemeToSystem = () => {
    setTheme("system");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="align-middle text-3xl md:text-2xl">
        {theme === "dark" && <MdDarkMode />}

        {theme === "light" && <MdLightMode />}

        {theme === "system" && <MdOutlineDarkMode />}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="flex cursor-pointer justify-between px-3 "
          onClick={setThemeToDark}
        >
          Dark <MdDarkMode className="text-lg" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex cursor-pointer justify-between px-3"
          onClick={setThemeToLight}
        >
          Light <MdLightMode className="text-lg" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex cursor-pointer justify-between px-3"
          onClick={setThemeToSystem}
        >
          System <MdComputer className="text-lg" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
