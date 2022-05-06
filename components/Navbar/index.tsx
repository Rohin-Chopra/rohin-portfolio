import classNames from 'classnames';
import { useState } from 'react';
import { MdMenu, MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-scroll';

type Props = {
  showDesign: boolean;
};

const Navbar = ({ showDesign }: Props) => {
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
        <div
          className={classNames({
            'bg-black text-white md:col-span-2 md:pr-16 flex md:justify-end items-center':
              true,
            'md:border-l-2 md:border-l-primary md:bg-darkGray': showDesign,
          })}
        >
          <div
            className={classNames({
              'fixed flex flex-col z-50 transition-all items-center md:flex-row md:justify-end md:h-full md:static md:pt-0 text-xl md:text-base':
                true,
              'bg-darkGray -top-4 left-0 h-screen pt-52 w-screen': isActive,
              'top-20 -left-full': !isActive,
            })}
          >
            <div className="my-4 md:my-0 mx-4">
              <Link
                onClick={toggleActive}
                to="projects"
                className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                activeClass="opacity-100"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                href="#projects"
              >
                Projects
              </Link>
            </div>
            <div className="my-4 md:my-0 mx-4">
              <Link
                onClick={toggleActive}
                to="skills"
                className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                href="#skills"
              >
                Skillset
              </Link>
            </div>
            <div className="bg-primary flex items-center font-semibold my-4 md:my-0 mx-4 py-2 md:py-0 px-4 rounded md:rounded-none md:h-full">
              <Link
                onClick={toggleActive}
                to="contact"
                className="cursor-pointer hover:opacity-70 transition-opacity"
                spy={true}
                smooth={true}
                offset={200}
                duration={500}
                href="#contact"
              >
                Contact
              </Link>
            </div>
          </div>
          <MdMenu
            className={classNames({
              'text-4xl text-secondary z-50 cursor-pointer md:hidden': true,
              hidden: isActive,
            })}
            onClick={toggleActive}
          />
          <MdOutlineClose
            className={classNames({
              'text-4xl text-secondary z-50 cursor-pointer md:hidden': true,
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
