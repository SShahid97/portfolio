import React from "react";
import ProjectCard from "./ProjectCard";
import AngularLogo from "../assets/img/angular-icon.png";
import ReactLogo from "../assets/img/React-icon.png";
import ScoreCricket from "../assets/img/Cricket.png";
import EbookStore from "../assets/img/EbookStore.png";
import LetUsChat from "../assets/img/LetUsChat.jpeg";

function Projects(props) {
  return (
    <>
      <div
         id="projects" 
        className="flex justify-center  text-3xl md:text-4xl py-3"
      >
        My Projects
      </div>
      <div 
       
        className="md:py-20 px-2">
        <div className="max-w-[1000px] mx-auto md:grid grid-cols-3 gap-5">
          <ProjectCard
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
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
