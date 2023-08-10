import React from 'react';


function ProjectCard({title, cardIcon, price}) {
    return (
        <div id="projects" className={` shadow-xl  cursor-pointer py-4 my-14 md:my-4 flex flex-col items-center hover:scale-105 duration-500`}>
            <img className={`w-20 mx-auto mt-[-3rem] `} src={cardIcon} alt="/" />
            <h2 className='my-4 text-2xl font-medium'>{title}</h2>
            <p className='text-3xl font-bold py-4'>{price}</p>
           
        </div>
    ); 
}

export default ProjectCard;