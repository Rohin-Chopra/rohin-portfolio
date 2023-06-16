import { ProjectGalleryCard } from "@components/project-gallery-card/projects-gallery-card";
import { NextPage } from "next";

const ProjectsPage: NextPage = () => {
  return (
    <div className="h-screen bg-black text-white">
      <div className="container mx-auto px-4 lg:px-8 pt-4">
        <h1 className="font-bold text-4xl">Projects</h1>
        <p className="mt-2 mb-4">
          Below are all the projects that I do in my spare time
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProjectGalleryCard
          link="https://snap-landing-page-wine.vercel.app/"
          imgUrl="/snap-landing-page.png"
          imgAlt="Snap Landing Page Project"
        />
        <ProjectGalleryCard
          link="https://frontend-challenges-amber.vercel.app/"
          imgUrl="/advice-generator-app.png"
          imgAlt="Advice Generator App Project"
        />
        <ProjectGalleryCard
          link="https://sunnyside-landing-page-rohin.netlify.app"
          imgUrl="/sunny-side-landing-page.png"
          imgAlt="Sunny Side Landing Page"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
