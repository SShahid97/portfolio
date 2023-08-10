import React from 'react';
import ProjectCard from './ProjectCard';
import AngularLogo from '../assets/img/angular-icon.png'
import ReactLogo from '../assets/img/React-icon.png'


function Projects(props) {
    return (
        <>
        <div className='flex justify-center  text-3xl md:text-4xl py-3' >
            My Projects
        </div>
        <div className='py-20 px-2'>
            <div className="max-w-[1000px] mx-auto md:grid grid-cols-3 gap-5">
                <ProjectCard title="E-BookStore"  cardIcon={ReactLogo}/>
                <ProjectCard title="ScoreCricket"  cardIcon={AngularLogo}/>
                <ProjectCard title="Let-Us-Chat"  cardIcon={ReactLogo}/>
                {/* <div className='shadow-xl h-[300px] my-4 bg-gray-100 hover:scale-105 duration-500'></div>
                <div className='shadow-xl h-[300px] my-4 hover:scale-105 duration-500'></div> */}
            </div>
        </div>
        </>
       
    );
}

export default Projects;