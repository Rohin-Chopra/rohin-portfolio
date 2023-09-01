import type { NextPage } from "next";
import Image from "next/image";
import projects from "./projects.json";

const ProjectsPage: NextPage = () => {
  return (
    <div className="h-screen bg-black text-white">
      <div className="container mx-auto px-4 pt-4 lg:px-8">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mb-4 mt-2">
          Below are all the projects that I do in my spare time
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            className="transition-opacity duration-300 hover:opacity-50"
            href={project.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={project.imgUrl}
              alt={project.title}
              width={500}
              height={300}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
