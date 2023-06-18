"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { Link as ReactScrollLink } from "react-scroll";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  const toggleActive = (): void => {
    setIsActive((val) => !val);
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
              <ReactScrollLink
                onClick={toggleActive}
                to="projects"
                className="nav-link"
                activeClass="opacity-100"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                href="#projects"
              >
                Projects
              </ReactScrollLink>
            </div>
            <div className="nav-item">
              <ReactScrollLink
                onClick={toggleActive}
                to="skills"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                href="#skills"
              >
                Skills
              </ReactScrollLink>
            </div>
            <div className="nav-item flex items-center rounded bg-primary px-4 py-2 font-semibold md:h-full md:rounded-none md:py-0">
              <ReactScrollLink
                onClick={toggleActive}
                to="contact"
                className="cursor-pointer transition-opacity hover:opacity-70"
                spy={true}
                smooth={true}
                offset={200}
                duration={500}
                href="#contact"
              >
                Contact
              </ReactScrollLink>
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
