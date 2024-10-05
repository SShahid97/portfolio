import React from 'react';
import { Link } from 'react-router-dom';


function PersonalProjectCard({title, cardIcon, cardImage, link}) {
    return (
        <Link to={link} target='_blank'>
            <div className={" shadow-xl  cursor-pointer py-4 my-14 md:my-4 flex flex-col items-center hover:scale-105 duration-500"}>
                <img className={`w-20 h-16 mx-auto mt-[-3rem] `} src={cardIcon} alt="/" />
                <h2 className='my-4 text-2xl font-medium'>{title}</h2>
                <div className='p-2'>
                    <img className={"w-[100%] h-[180px] mx-auto "} src={cardImage} alt="/" />
                </div>
            </div>
        </Link>
        
    ); 
}

export default PersonalProjectCard;