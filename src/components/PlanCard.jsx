import React from 'react';


function PlanCard({title, cardIcon, price}) {
    return (
        <div className={`${price==="$199" ? 'bg-gray-100':''} shadow-xl  py-4 my-14 md:my-4 flex flex-col items-center hover:scale-105 duration-500`}>
            <img className={`w-20 mx-auto mt-[-3rem] ${price==="$199" ? 'bg-transparent':'bg-white'} `} src={cardIcon} alt="/" />
            <h2 className='my-4 text-2xl font-medium'>{title}</h2>
            <p className='text-3xl font-bold py-4'>{price}</p>
            <div className='text-center font-medium'>
                <p className='py-2  border-b mx-8 mt-8'>Lorem ipsum dolor sit amet.</p>
                <p className='py-2  border-b mx-8'>Lorem ipsum dolor sit amet consectetur?</p>
                <p className='py-2  border-b mx-8'>Lorem ipsum dolor sit amet consectetur.</p>                
            </div>
            <button className={`${price==="$199" ? 'bg-[#2f332e] text-white':'bg-[#00df9a]'}  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`}>Start Trial </button>
        </div>
    ); 
}

export default PlanCard;