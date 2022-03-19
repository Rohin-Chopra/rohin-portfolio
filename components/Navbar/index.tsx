import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <header>
      <div className="grid grid-cols-3 bg-black">
        <div className="bg-black text-white text-xl font-bold px-4 py-8">
          <span className="font-display">ROHIN CHOPRA</span>
        </div>
        <div className="bg-darkGray text-white col-span-2 flex justify-end items-center border-l-2 border-l-primary pr-16">
          <div className="mx-4">
            <NavLink
              href="#"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              Experience
            </NavLink>
          </div>
          <div className="mx-4">
            <NavLink
              href="#"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              Work
            </NavLink>
          </div>
          <div className="mx-4">
            <NavLink
              href="#"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              Skills
            </NavLink>
          </div>
          <div className="mx-4 bg-primary h-full flex items-center px-4 font-semibold ">
            <NavLink href="#" className="hover:opacity-70 transition-opacity">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
