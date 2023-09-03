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
import { twMerge } from "tailwind-merge";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
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
      <DropdownMenu>
        <DropdownMenuTrigger>
          {theme === "dark" && (
            <MdDarkMode className="cursor-pointer text-2xl" />
          )}

          {theme === "light" && (
            <MdLightMode className="cursor-pointer text-2xl" />
          )}

          {theme === "system" && (
            <MdOutlineDarkMode className="cursor-pointer text-2xl" />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className="flex cursor-pointer justify-between px-3"
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
    </div>
  );
};
