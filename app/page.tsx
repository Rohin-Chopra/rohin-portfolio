/** @jsxImportSource @emotion/react */
"use client";

import { ProjectCard } from "app/components/project-card/project-card";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaAws,
  FaBitbucket,
  FaGithub,
  FaJira,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGatsby,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Link as ReactScrollLink } from "react-scroll";
import Typewriter from "typewriter-effect";
import { ContactForm } from "./components/contact-form/contact-form";

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <section id="hero" className="md:h-screen-90">
        <div className="flex flex-col-reverse justify-end pt-8 md:pt-0 md:grid md:grid-cols-3 bg-black h-full">
          <div className="bg-black relative">
            <div className="flex justify-center md:justify-end">
              <div className="md:absolute -right-6 z-10 mt-12">
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
          <div className="col-span-2 md:bg-darkGray md:border-l-2 md:border-primary px-8 rounded-bl-3xl ">
            <div className="md:mt-24 text-4xl lg:text-6xl font-bold text-white">
              <h1 className="mb-4">I&apos;m Rohin Chopra.</h1>
              <h1 className="mb-4">
                <Typewriter
                  onInit={(t) => {
                    t.typeString("A Software Engineer")
                      .pauseFor(150)
                      .deleteAll()
                      .typeString("Consultant")
                      .pauseFor(150)
                      .deleteAll()
                      .typeString("Solutions Architect")
                      .start();
                  }}
                />
              </h1>
              <h1 className="text-gray mb-8">based in Australia</h1>
              <p className="font-normal text-white max-w-2xl text-lg">
                I&apos;m incredibly passionate about solving problems, and tech
                is my weapon of choice. I excel in architecting, designing and
                developing robust and scalable solutions.
              </p>
              <ReactScrollLink
                to="contact"
                className="text-base bg-primary px-8 py-4 cursor-pointer rounded border-solid shadow mt-4 inline-block w-full md:w-auto text-center"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                href="#contact"
              >
                Say Hello
              </ReactScrollLink>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="bg-black text-white py-8 px-6">
        <div className="container mx-auto">
          <h2 className="font-bold text-2xl md:text-4xl md:mb-10 mt-4">
            Projects I&apos;ve built
          </h2>
          <div className="mt-2 md:mt-4">
            <ProjectCard
              name="Make My Career"
              url="https://makemycareer.rohinchopra.com/"
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
            <ProjectCard
              isReverse
              className="mt-8 md:mt-28"
              name="Digishelf"
              url="https://digishelf.rohinchopra.com"
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
            <ProjectCard
              className="mt-8 md:mt-28"
              name="Margembie Labradors"
              url="https://www.margembielabradors.com.au/contact"
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
            <Link
              href="projects"
              className="block mx-auto text-base bg-primary px-8 py-4 cursor-pointer rounded border-solid shadow mt-4 text-center w-fit"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
      <section id="skills" className="bg-black text-white py-8 px-6">
        <div className="container mx-auto">
          <h2 className="font-bold text-2xl md:text-4xl mb-2 mt-4">Skills</h2>
          <div className="mb-12">
            <h3 className="opacity-80 font-semibold text-xl mb-4">
              Languages And Frameworks
            </h3>
            <div className="grid grid-cols-2 gap-y-4 justify-items-center text-5xl md:grid-cols-8 md:gap-y-0 md:text-6xl">
              <SiTypescript
                title="TypeScript"
                className="hover:text-typescript transition-colors duration-300"
              />
              <SiJavascript
                title="Javascript"
                className="hover:text-javascript transition-colors duration-300"
              />
              <SiNodedotjs
                title="Node.js"
                className="hover:text-nodejs transition-colors duration-300"
              />
              <FaReact
                title="React"
                className="hover:text-react transition-colors duration-300"
              />
              <SiNextdotjs title="Next.js" />
              <SiGatsby
                title="Gatsby"
                className="hover:text-gatsby transition-colors duration-300"
              />
              <SiTailwindcss title="Tailwindcss" />
              <SiBootstrap
                title="Bootstrap"
                className="hover:text-bootstrap transition-colors duration-300"
              />
            </div>
          </div>
          <div className="mb-12">
            <h3 className="opacity-80 font-semibold text-xl mb-4">
              Technologies
            </h3>
            <div className="grid grid-cols-2 gap-y-4 justify-items-center md:grid-cols-8 text-5xl md:text-6xl">
              <SiPostgresql title="PostgreSQL" />
              <SiMysql title="MySQL" />
              <SiMongodb title="MongoDB" />
              <SiDocker title="Docker" />
              <SiFigma title="Figma" />
            </div>
          </div>
          <div className="mb-12">
            <h3 className="opacity-80 font-semibold text-xl mb-4">Services</h3>
            <div className="grid grid-cols-2 gap-y-4 justify-items-center md:grid-cols-8 text-6xl">
              <FaAws title="AWS" />
              <FaGithub title="Github" />
              <FaBitbucket title="BitBucket" />
              <FaJira title="Jira" />
              <SiVercel title="Vercel" />
              <SiNetlify title="Netlify" />
            </div>
          </div>
          <div>
            <h3 className="opacity-80 font-semibold text-xl mb-4">
              Certifications
            </h3>
            <div className="grid grid-cols-2 gap-y-4 justify-items-center md:grid-cols-8 text-6xl">
              <Image
                src="/aws-certified-cloud-practitioner.png"
                height={125}
                width={125}
                alt="AWS Cloud Practitioner Certificate"
              />
              <Image
                src="/aws-certified-solutions-architect-associate.png"
                height={125}
                width={125}
                alt="AWS Solutions Architect Certificate"
              />
              <Image
                src="/aws-certified-developer-associate.png"
                height={125}
                width={125}
                alt="AWS Developer Associate Certificate"
              />
              <Image
                src="/aws-certified-sysops-administrator-associate.png"
                height={125}
                width={125}
                alt="AWS SysOps Administrator Certificate"
              />
              <Image
                src="/aws-certified-security-specialty.png"
                height={125}
                width={125}
                alt="AWS Security Specialty Certificate"
              />
              <Image
                src="/aws-certified-database-specialty.png"
                height={125}
                width={125}
                alt="AWS Database Specialty Certificate"
              />
              <Image
                src="/hashicorp-certified-terraform-associate-003.png"
                height={125}
                width={125}
                alt="Hashicorp Terraform Associate Certificate"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-black text-white pt-12 pb-8 px-6">
        <div className="container mx-auto">
          {" "}
          <div className="md:grid md:grid-cols-2">
            <div className="mb-4 md:mb-0">
              <h2 className="font-bold text-2xl md:text-4xl md:mb-2">
                Let&apos;s talk
              </h2>
              <p className="opacity-80">
                Got any questions or want to reach out to me?
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
