import React from "react";

const About = ({about}) => {
  return (
    <div id="about" className="py-10 border-[#2699fb] border-b-[1px]">
      <div
        className="flex justify-center  text-3xl md:text-4xl mb-3"
      >
        About
      </div>
      <div className=" max-w-[1000px] md:mx-auto mx-3 gap-5 text-justify">
        {about && about.map((paragraph)=>{
            return (
                <p key={paragraph.order} style={ paragraph.order === 1 ? {fontSize:"20px" ,marginBottom:"15px" }:{ marginBottom:"15px"}}>
                    {paragraph.paragraph}
                </p>
            )
        })}
       
      </div>
    </div>
  );
};

export default About;
