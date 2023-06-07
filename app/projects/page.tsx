import { ProjectCard } from "@components/project-card/project-card";
import { NextPage } from "next";
import { FaAws, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const ProjectsPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-8 px-6">
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
            <SiNextdotjs className="text-4xl" title="Next.js" key="Next.js" />,
            <SiTailwindcss
              className="text-4xl"
              title="Tailwindcss"
              key="Tailwindcss"
            />,
            <FaNodeJs className="text-4xl" title="Nodejs" key="Nodejs" />,
            <SiMysql className="text-4xl" title="MySQL" key="MySQL" />,
            <SiGraphql className="text-4xl" title="GraphQL" key="GraphQL" />,
            <FaAws className="text-4xl" title="AWS" key="AWS" />,
          ]}
        />
        <ProjectCard
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
            <SiExpress className="text-4xl" title="Express" key="Express" />,
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
            <SiExpress className="text-4xl" title="Express" key="Express" />,
            <SiMongodb className="text-4xl" title="Mongo DB" key="Mongo DB" />,
            <SiNetlify className="text-4xl" title="Netlify" key="Netlify" />,
          ]}
        />
        <ProjectCard
          className="mt-8 md:mt-28"
          name="Challenges"
          url="/challenges"
          description="A collection of all the frontend and backend challenges I've completed to keep myself entertained!"
          imgUrl="/snap-landing-page.png"
          tech={[
            <SiJavascript
              className="text-4xl"
              title="JavaScript"
              key="JavaScript"
            />,
            <FaReact className="text-4xl" title="React" key="React" />,
            <SiTailwindcss
              className="text-4xl"
              title="Tailwindcss"
              key="Tailwindcss"
            />,
          ]}
        />
        <ProjectCard
          className="mt-8 md:mt-28"
          name="Github Timeline Generator"
          url="https://github-timeline-generator.netlify.app"
          description="A website that generates a timeline of the repositories of a user, which later can be shared with friends or colleagues."
          imgUrl="/github-timeline-generator.png"
          tech={[
            <SiJavascript
              className="text-4xl"
              title="TypeScript"
              key="TypeScript"
            />,
            <FaReact className="text-4xl" title="React" key="React" />,
            <SiNetlify className="text-4xl" title="Netlify" key="Netlify" />,
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
