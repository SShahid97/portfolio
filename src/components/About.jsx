import React from "react";
import SectionHeader from "./SectionHeader";

const About = ({about}) => {
  return (
    <>
      <SectionHeader sectionId="about" title="About Me" />
      <section className="pt-6 pb-10 border-primary border-b-[1px]">
        <div className="flex flex-col max-w-[1000px] md:mx-auto mx-3 gap-1 text-justify">
        {about && about.map((paragraph)=>{
            return (
              <div 
                key={paragraph.order} 
                className="
                  w-auto
                  md:w-[48%]
                  mb-3
                  md:mb-0
                  rounded-2xl 
                  p-4 
                  border-gray
                  border 
                  shadow-lg 
                  even:self-end
                  even:rotate-2
                  odd:-rotate-2
                  hover:rotate-0
                  hover:scale-105
                  md:hover:scale-110
                  duration-500
                  "
              >
                <p >
                    {paragraph.paragraph}
                </p>
              </div>
                
            )
        })}
       
        </div>
      </section>
    </>
  );
};

export default About;
