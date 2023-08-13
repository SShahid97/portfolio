import React from 'react'
import { Link } from 'react-router-dom'

const CertificationCard = ({title, cardIcon, cardImage, link}) => {
  return (
    <Link to={link} target='_blank'>
        <div className={" shadow-xl  cursor-pointer py-4 my-14  md:my-4 flex flex-col items-center hover:scale-105 duration-500"}>
            <img 
                className={`w-20 h-18 mx-auto mt-[-3rem] rounded-full`} 
                src={cardIcon} 
                alt="/" 
                />
            <h2 className='my-4 px-3 text-2xl font-medium' style={title === "Javascript Algos and DS" ? {marginTop:"42px"}:{}}>{title}</h2>
            <div className='p-2'>
                <img className={"w-[100%] h-[180px] mx-auto "} src={cardImage} alt="/" />
            </div>
        </div>
    </Link>
  )
}

export default CertificationCard