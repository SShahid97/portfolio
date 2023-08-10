import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { Link } from 'react-router-dom';

function Header({appTitle}) {
    // debugger
    const [toggle, setToggle]=useState(false);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-[#2699fb] shadow-sm p-1 sticky left-0 top-0 z-1000'>
            <div className='max-w-[1000px] py-[12px] items-center flex justify-between mx-auto'>
                <div className='pl-3 md:pl-0 text-2xl fond-bold'>
                    {appTitle}
                </div>
                { toggle ? 
                    <AiOutlineClose  onClick={()=>setToggle(!toggle)} className='md:hidden block text-white text-3xl'/>
                    :
                    <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='md:hidden block text-white text-3xl'/>
                }
                
                <ul className='hidden md:flex  text-white gap-5'>
                    <li  className='flex flex-col items-center px-2 py-4 '>
                        <Link  href="#" onClick={() => scrollTo('home')} className='hover:border-b-2 ' >
                            Home
                        </Link>
                    </li>
                    <li className='flex flex-col items-center px-2 py-4'>
                       <Link  href="#" onClick={() => scrollTo('projects')} className='hover:border-b-2 ' >
                        Projects
                       </Link> 
                       
                    </li>
                    <li  className='flex flex-col items-center px-2 py-4  '>
                        <Link  href="#" onClick={() => scrollTo('home')} className='hover:border-b-2 ' > 
                            Resources
                        </Link>
                      
                    </li>
                    <li className='flex flex-col items-center px-2 py-4  '>
                        <Link  href="#" onClick={() => scrollTo('contact')} className='hover:border-b-2 ' >
                            Contact
                        </Link>
                       
                    </li>
                </ul>

                {/* Responsive Menue */}
                <ul className={`duration-300 md:hidden w-full h-screen text-2xl text-white fixed bg-[#2699fb]
                    ${toggle ? 'left-[0]':'left-[-100%]'}  top-[65px]`}>
                    <li className='p-5' onClick={()=>setToggle(!toggle)}>
                        <Link  href="#" onClick={() => { 
                            scrollTo('home') 
                            setToggle(!toggle)
                            } }>
                            Home
                        </Link>
                    </li>
                    <li className='p-5'>
                        <Link  href="#" onClick={() => {
                             scrollTo('projects')
                             setToggle(!toggle)
                            }}>
                        Projects
                       </Link> 
                    </li>
                    <li className='p-5'>
                        <Link  href="#" onClick={() =>{
                            scrollTo('home')
                            setToggle(!toggle)
                        }} > 
                        Resources
                        </Link>
                    </li>
                    <li className='p-5'>
                        <Link  href="#" onClick={() =>{ 
                            scrollTo('contact')
                            setToggle(!toggle)
                        }}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    ); 
}

export default Header;