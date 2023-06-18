import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full border-t border-t-primary bg-black py-5 text-center text-white md:py-10">
    <div className="mb-2 bg-black text-xl font-bold text-white">
      <span className="font-display">ROHIN CHOPRA</span>
    </div>
    <div className="flex justify-center text-4xl">
      <a
        className="mr-4 cursor-pointer"
        aria-label="Rohin Chopra's linkedin page"
        href="https://www.linkedin.com/in/rohin-chopra-2b38791a0/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaLinkedin className="transition-colors duration-300 hover:text-linkedin" />
      </a>
      <a
        className="mr-4 cursor-pointer"
        aria-label="Rohin Chopra's Github page"
        href="https://github.com/Rohin-Chopra"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithub className="transition-colors duration-300 hover:text-github" />
      </a>
    </div>
  </footer>
);
export { Footer };
