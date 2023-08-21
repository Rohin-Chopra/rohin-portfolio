"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { useMediaQuery } from "src/app/hooks/useMediaQuery";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleActive = (): void => {
    setIsActive((val) => !val);
  };

  const closeNavbar = () => {
    if (isMobile) {
      setIsActive(false);
    }
  };

  return (
    <header>
      <div className="flex w-full items-center justify-between bg-black px-8 py-2 md:grid md:grid-cols-3 md:items-stretch md:p-0">
        <Link href="/" passHref>
          <div className="bg-black py-8 text-xl font-bold text-white md:pl-8">
            <span className="font-display">ROHIN CHOPRA</span>
          </div>
        </Link>
        <div
          className={classNames({
            "bg-black text-white md:col-span-2 md:pr-16 flex md:justify-end items-center":
              true,
            "md:border-l-2 md:border-l-primary md:bg-darkGray":
              pathname === "/",
          })}
        >
          <div
            className={classNames({
              "fixed flex flex-col z-50 transition-all items-center md:flex-row md:justify-end md:h-full md:static md:pt-0 text-xl md:text-base":
                true,
              "bg-darkGray -top-4 left-0 h-screen pt-52 w-screen": isActive,
              "top-20 -left-full": !isActive,
            })}
          >
            <div className="nav-item">
              <Link onClick={closeNavbar} href="/">
                About
              </Link>
            </div>
            <div className="nav-item flex items-center rounded px-4 py-2 md:h-full md:rounded-none md:bg-primary md:py-0 md:font-semibold">
              <Link onClick={closeNavbar} href="/blogs">
                Blogs
              </Link>
            </div>
          </div>
          <MdMenu
            className={classNames({
              "nav-hamburger-icon-base": true,
              hidden: isActive,
            })}
            onClick={toggleActive}
          />
          <MdOutlineClose
            className={classNames({
              "nav-hamburger-icon-base": true,
              hidden: !isActive,
            })}
            onClick={toggleActive}
          />
        </div>
      </div>
    </header>
  );
};

export { Navbar };
