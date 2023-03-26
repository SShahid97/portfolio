import React from 'react';
import laptop from "../assets/img/laptop.jpg"

function Experts(props) {
    return (
        <div className='max-w-[1000px] p-2 mx-auto  md:grid grid-cols-2'>
            <div className=' col-span-1 md:w-[80%] text-center'>
                <img src={laptop} alt="laptop" className='inline'/>
            </div>
            <div className='  col-span-1 flex flex-col justify-center'>
                <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
                <p className='my-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sunt commodi consequuntur distinctio ratione fuga amet! Esse nesciunt ea magni?
                </p>
                <button className='w-[30%] inline bg-black text-white p-3 rounded'>Get Started</button>
            </div>
        </div>
    );
}

export default Experts;