import React from "react";
// import ProjectCard from "./ProjectCard";
// import AngularLogo from "../assets/img/angular-icon.png";
// import ReactLogo from "../assets/img/React-icon.png";
// import ScoreCricket from "../assets/img/Cricket.png";
// import EbookStore from "../assets/img/EbookStore.png";
// import LetUsChat from "../assets/img/LetUsChat.jpeg";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/static";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <SectionHeader sectionId="projects" title="Projects" />
      <section className="pb-20 md:pt:10  px-2 border-primary border-b-[1px]">
      <div className="max-w-[1000px]  mx-auto flex flex-col gap-y-4">
        {
          projects.map((project)=>{
            return (
              <ProjectCard
                key={project.projectName}
                projectName={project.projectName}
                techStack={project.techStack}
                description={project.description}
              />
            )
          })
        }
          {/* <ProjectCard
            title="E-BookStore"
            cardIcon={ReactLogo}
            cardImage={EbookStore}
            link={"https://github.com/SShahid97/bookstore_frontend"}
          />
          <ProjectCard
            title="ScoreCricket"
            cardIcon={AngularLogo}
            cardImage={ScoreCricket}
            link={"https://cricketdb-5967e.web.app"}
          />
          <ProjectCard
            title="Let-Us-Chat"
            cardIcon={ReactLogo}
            cardImage={LetUsChat}
            link={"https://github.com/SShahid97/ChatApp"}
          /> */}
        </div>
      </section>
    </>
  );
}

export default Projects;
