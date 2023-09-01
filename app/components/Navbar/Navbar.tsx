"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const openNavbar = () => {
    setIsActive(true);
  };

  const closeNavbar = () => {
    if (isMobile) {
      setIsActive(false);
    }
  };

  return (
    <header>
      <div className="flex w-full items-center justify-between bg-primary px-8 py-2 dark:bg-black md:grid md:grid-cols-3 md:items-stretch md:p-0">
        <Link href="/" passHref>
          <div
            className={classNames({
              "py-8 text-xl font-bold text-white dark:bg-black dark:text-white md:pl-8":
                true,
              "md:bg-white md:text-black": pathname === "/",
            })}
          >
            <span className="font-display">ROHIN CHOPRA</span>
          </div>
        </Link>
        <div
          className={classNames({
            "dark:bg-black text-white md:col-span-2 md:pr-16 flex md:justify-end items-center bg-primary":
              true,
            "md:border-l-2 md:border-l-white md:dark:border-l-primary md:dark:bg-darkGray":
              pathname === "/",
          })}
        >
          <div className="mr-4 md:hidden">
            <ThemeSwitcher />
          </div>
          <div
            className={classNames({
              "fixed flex flex-col z-50 transition-all items-center md:flex-row md:justify-end md:h-full md:static md:pt-0 text-xl md:text-base":
                true,
              "bg-white text-black dark:text-white dark:bg-darkGray -top-4 left-0 h-screen pt-52 w-screen px-32 md:px-0":
                isActive,
              "top-20 -left-full": !isActive,
            })}
          >
            <div className="nav-item hidden md:block">
              <ThemeSwitcher />
            </div>
            <div className="nav-item">
              <Link onClick={closeNavbar} href="/">
                About
              </Link>
            </div>
            <div className="nav-item flex items-center rounded px-4 py-2 md:h-full md:rounded-none md:bg-primary md:py-0">
              <Link onClick={closeNavbar} href="/blogs">
                Blogs
              </Link>
            </div>
          </div>
          {!isActive && (
            <MdMenu className="nav-hamburger-icon-base" onClick={openNavbar} />
          )}
          {isActive && (
            <MdOutlineClose
              className="nav-hamburger-icon-base text-black dark:text-white"
              onClick={closeNavbar}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export { Navbar };
