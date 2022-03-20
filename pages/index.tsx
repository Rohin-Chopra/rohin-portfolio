import { Fragment, useState } from "react";
import NavLink from "../components/Navbar/NavLink";
import { MyNextPage } from "../shared/types";
import Image from "next/image";
import FeaturedProjectCard from "../components/ProjectCard";
import {
  FaAws,
  FaBitbucket,
  FaGithub,
  FaJira,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiGraphql,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiExpress,
  SiMongodb,
  SiBootstrap,
  SiNetlify,
  SiNodedotjs,
  SiGatsby,
  SiPostgresql,
  SiDocker,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import classNames from "classnames";

const Home: MyNextPage = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((val) => !val);
  };

  return (
    <Fragment>
      <section id="hero" className="h-screen">
        <div
          className="flex justify-between w-full md:grid md:grid-cols-3 bg-black"
          id="hero"
        >
          <div className="bg-black text-white text-xl font-bold pl-8 py-8">
            <span className="font-display">ROHIN CHOPRA</span>
          </div>
          <div className="bg-black lg:bg-darkGray text-white md:col-span-2  md:border-l-2 md:border-l-primary md:pr-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-end md:h-full">
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
                <NavLink
                  href="#"
                  className="hover:opacity-70 transition-opacity"
                >
                  Contact
                </NavLink>
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
        </div>
        <div className="md:grid md:grid-cols-3 bg-black h-full ">
          <div className="bg-black relative">
            <div className="flex justify-end">
              <div className="md:absolute -right-6 z-50 mt-12">
                <Fade delay={50}>
                  <Image
                    className="rounded-full bg-primary"
                    alt="Rohin Chopra"
                    src="/hero.png"
                    width={300}
                    height={300}
                  />
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-darkGray border-l-2 border-primary pl-8 rounded-bl-3xl ">
            <div className="mt-24">
              <h1 className="text-6xl font-bold text-white mb-4">
                I&apos;m Rohin Chopra.
              </h1>
              <h1 className="text-6xl font-bold text-white mb-4">
                <Typewriter
                  onInit={(t) => {
                    t.typeString("A Software Engineer").start();
                  }}
                />
              </h1>
              <h1 className="text-6xl font-bold text-gray mb-8">
                based in Australia
              </h1>
              <p className="text-white max-w-2xl text-lg">
                I&apos;m probably the most passionate engineer you will ever get
                to work with. If you have a great project that needs some
                amazing skills, I&apos;m your guy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="bg-black text-white py-8 px-6 mt-16">
        <div className="container mx-auto">
          <h2 className="font-bold text-4xl mb-10 mt-4">
            Projects I&apos;ve built
          </h2>
          <div className="mt-4">
            <FeaturedProjectCard
              name="Make My Career"
              description="Makemycareer is a platform for year 10-12 VCE students to find the perfect university course according to their needs and interest"
              imgUrl="/makemycareer.png"
              tech={[
                <SiTypescript
                  className="text-4xl"
                  title="TypeScript"
                  key="TypeScript"
                />,
                <FaReact className="text-4xl" title="React" key="React" />,
                <SiNextdotjs
                  className="text-4xl"
                  title="Next.js"
                  key="Next.js"
                />,
                <SiTailwindcss
                  className="text-4xl"
                  title="Tailwindcss"
                  key="Tailwindcss"
                />,
                <FaNodeJs className="text-4xl" title="Nodejs" key="Nodejs" />,
                <SiMysql className="text-4xl" title="MySQL" key="MySQL" />,
                <SiGraphql
                  className="text-4xl"
                  title="GraphQL"
                  key="GraphQL"
                />,
                <FaAws className="text-4xl" title="AWS" key="AWS" />,
              ]}
            />
            <FeaturedProjectCard
              isReverse
              className="mt-28"
              name="Digishelf"
              description="With Digishelf you can create digital shelves that store your favorite movies and tv shows which then you can share with friends and family"
              imgUrl="/digishelf.png"
              tech={[
                <SiJavascript
                  className="text-4xl"
                  title="TypeScript"
                  key="TypeScript"
                />,
                <FaReact className="text-4xl" title="React" key="React" />,
                <SiTailwindcss
                  className="text-4xl"
                  title="Tailwindcss"
                  key="Tailwindcss"
                />,
                <FaNodeJs className="text-4xl" title="Nodejs" key="Nodejs" />,
                <SiExpress
                  className="text-4xl"
                  title="Express"
                  key="Express"
                />,
                <FaAws className="text-4xl" title="AWS" key="AWS" />,
              ]}
            />
            <FeaturedProjectCard
              className="mt-28"
              name="Margembie Labradors"
              description="A MERN full stack website for a client who is a dog breeder. This website involved CRUD operations in the admin panel and also displaying those resources in the frontend."
              imgUrl="/margembie-labradors.png"
              tech={[
                <SiJavascript
                  className="text-4xl"
                  title="TypeScript"
                  key="TypeScript"
                />,
                <FaReact className="text-4xl" title="React" key="React" />,
                <SiBootstrap
                  className="text-4xl"
                  title="Bootstrap"
                  key="Bootstrap"
                />,
                <FaNodeJs className="text-4xl" title="Nodejs" key="Nodejs" />,
                <SiExpress
                  className="text-4xl"
                  title="Express"
                  key="Express"
                />,
                <SiMongodb
                  className="text-4xl"
                  title="Mongo DB"
                  key="Mongo DB"
                />,
                <SiNetlify
                  className="text-4xl"
                  title="Netlify"
                  key="Netlify"
                />,
              ]}
            />
          </div>
        </div>
      </section>
      <section id="skills" className="bg-black text-white py-8 px-6">
        <div className="container mx-auto">
          <h2 className="font-bold text-4xl mb-2 mt-4">Skillset</h2>
          <p className="opacity-80 text-lg max-w-xl mb-4">
            With my skills and experience in frontend, backend and cloud I am
            your go to guy to deploy a modern, robust and scalable web
            application.
          </p>
          <div className="mb-12">
            <h3 className="opacity-80 font-semibold text-xl mb-4">
              Languages And Frameworks
            </h3>
            <div className="md:grid md:grid-cols-8 text-6xl">
              <SiJavascript title="Javascript" />
              <SiTypescript title="TypeScript" />
              <FaReact title="React" />
              <SiNextdotjs title="Next.js" />
              <SiGatsby title="Gatsby" />
              <SiNodedotjs title="Node.js" />
              <SiTailwindcss title="Tailwindcss" />
              <SiBootstrap title="Bootstrap" />
            </div>
          </div>
          <div className="mb-12">
            <h3 className="opacity-80 font-semibold text-xl mb-4">
              Technologies
            </h3>
            <div className="md:grid md:grid-cols-8 text-6xl">
              <SiPostgresql title="PostgreSQL" />
              <SiMysql title="MySQL" />
              <SiMongodb title="MongoDB" />
              <SiDocker title="Docker" />
              <SiFigma title="Figma" />
            </div>
          </div>
          <div>
            <h3 className="opacity-80 font-semibold text-xl mb-4">Services</h3>
            <div className="md:grid md:grid-cols-8 text-6xl">
              <FaAws title="AWS" />
              <FaGithub title="Github" />
              <FaBitbucket title="BitBucket" />
              <FaJira title="Jira" />
              <SiVercel title="Vercel" />
              <SiNetlify title="Netlify" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Home.requiresLayout = false;

export default Home;
