import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-t-primary w-full py-5 md:py-10 text-center">
      <div className="bg-black text-white text-xl font-bold mb-2">
        <span className="font-display">ROHIN CHOPRA</span>
      </div>
      <div className="flex justify-center text-4xl">
        <a
          className="mr-4 cursor-pointer"
          href="https://www.linkedin.com/in/rohin-chopra-2b38791a0/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedin className="hover:text-linkedin transition-colors duration-300" />
        </a>
        <a
          className="mr-4 cursor-pointer"
          href="https://github.com/Rohin-Chopra"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub className="hover:text-github transition-colors duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
