import React from "react";

const About = ({about}) => {
  return (
    <div id="about" className="py-10 border-[#2699fb] border-b-[1px]">
      <div
        className="flex justify-center  text-3xl md:text-4xl mb-5"
      >
        About
      </div>
      <div className="flex flex-col max-w-[1000px] md:mx-auto mx-3 gap-15 md:gap-1 text-justify">
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
                  border-gray-200 
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
    </div>
  );
};

export default About;
