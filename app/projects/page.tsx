import { ProjectGalleryCard } from "@components/project-gallery-card/projects-gallery-card";
import { NextPage } from "next";
import projects from "./projects.json";

const ProjectsPage: NextPage = () => {
  return (
    <div className="h-screen bg-black text-white">
      <div className="container mx-auto px-4 lg:px-8 pt-4">
        <h1 className="font-bold text-4xl">Projects</h1>
        <p className="mt-2 mb-4">
          Below are all the projects that I do in my spare time
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectGalleryCard
            key={project.title}
            link={project.link}
            imgUrl={project.imgUrl}
            imgAlt={project.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
