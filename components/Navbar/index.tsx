import classNames from "classnames";
import { useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((val) => !val);
  };

  return (
    <header>
      <div className="flex justify-between items-center w-full md:items-stretch md:grid md:grid-cols-3 bg-black py-2 px-8 md:p-0">
        <div className="bg-black text-white text-xl font-bold md:pl-8 py-8">
          <span className="font-display">ROHIN CHOPRA</span>
        </div>
        <div className="bg-black md:bg-darkGray text-white md:col-span-2 md:border-l-2 md:border-l-primary md:pr-16 flex md:justify-end items-center">
          <div
            className={classNames({
              "fixed flex flex-col z-50 transition-all items-center md:flex-row md:justify-end md:h-full md:static md:pt-0 text-xl md:text-base":
                true,
              "bg-darkGray -top-4 left-0 h-screen pt-52 w-screen": isActive,
              "top-20 -left-full": !isActive,
            })}
          >
            <div className="my-4 md:my-0 mx-4">
              <NavLink
                onClick={toggleActive}
                href="#"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                Experience
              </NavLink>
            </div>
            <div className="my-4 md:my-0 mx-4">
              <NavLink
                onClick={toggleActive}
                href="#"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                Work
              </NavLink>
            </div>
            <div className="my-4 md:my-0 mx-4">
              <NavLink
                onClick={toggleActive}
                href="#"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                Skills
              </NavLink>
            </div>
            <div className="bg-primary flex items-center font-semibold my-4 md:my-0 mx-4 py-2 md:py-0 px-4 rounded md:rounded-none md:h-full">
              <NavLink
                onClick={toggleActive}
                href="#"
                className="hover:opacity-70 transition-opacity"
              >
                Contact
              </NavLink>
            </div>
          </div>
          <MdMenu
            className={classNames({
              "text-4xl text-secondary z-50 cursor-pointer md:hidden": true,
              hidden: isActive,
            })}
            onClick={toggleActive}
          />
          <MdOutlineClose
            className={classNames({
              "text-4xl text-secondary z-50 cursor-pointer md:hidden": true,
              hidden: !isActive,
            })}
            onClick={toggleActive}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
