import React from "react";

function ProjectCard({ projectName, techStack, description }) {
  return (
    <div className="w-full flex flex-col gap-4 shadow-xl p-4 hover:scale-105 duration-500">
      <div className="flex flex-row justify-start items-center  place-content-center gap-2 flex-wrap">
          <h2 className="text-lg font-semibold">
            {projectName} |
          </h2>
          {techStack.map((item, index) => {
            return (
              <p key={item.slice(0, 15)} className="font-serif text-sm">
                {item} {index+1 !== techStack.length ? ',':''}
              </p>
            );
          })}
      </div>
      <div className="flex flex-col gap-1">
        <ul style={{ listStyleType: "disc" }} className="pl-6">
          {description.map((item) => {
            return (
              <li key={item.slice(0, 15)} className="py-2">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
