import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { FaWhatsapp } from 'react-icons/fa';
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
        <div style={{zIndex:"1000"}} className='bg-[#2699fb] shadow-sm p-1 sticky left-0 top-0 '>
            <div className='max-w-[1000px] py-[12px] items-center flex justify-between mx-auto'>
                <div className='pl-3 md:pl-0 text-2xl fond-bold'>
                    <div className='flex justify-start items-center gap-2 text-white'>
                        <img 
                            src='https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg'
                            alt='profile'
                            width={40}
                            height={40}
                            style={{borderRadius: 1000}}    
                        />
                        {appTitle}
                    </div>
                </div>
                { toggle ? 
                    <AiOutlineClose  onClick={()=>setToggle(!toggle)} className='md:hidden block text-white text-3xl'/>
                    :
                    <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='md:hidden block text-white text-3xl'/>
                }
                
                <ul className='hidden md:flex  text-white gap-5'>
                    <li  className='flex flex-col items-center px-2 py-4 '>
                        <Link  href="#" onClick={() => scrollTo('home')} className='border-b-2 border-b-[#2699fb] hover:border-b-white' >
                            Home
                        </Link>
                    </li>
                    <li  className='flex flex-col items-center px-2 py-4  '>
                        <Link  href="#" onClick={() => scrollTo('about')} className='border-b-2 border-b-[#2699fb] hover:border-b-white ' > 
                            About
                        </Link>
                      
                    </li>
                    <li className='flex flex-col items-center px-2 py-4'>
                       <Link  href="#" onClick={() => scrollTo('projects')} className='border-b-2 border-b-[#2699fb] hover:border-b-white' >
                        Projects
                       </Link> 
                    </li>
                    <li className='flex flex-col items-center px-2 py-4'>
                       <Link  href="#" onClick={() => scrollTo('certifications')} className='border-b-2 border-b-[#2699fb] hover:border-b-white' >
                        Certifications
                       </Link> 
                    </li>
                    <li className='flex flex-col items-center px-2 py-4  '>
                        <Link  href="#" onClick={() => scrollTo('contact')} className='border-b-2 border-b-[#2699fb] hover:border-b-white' >
                            Contact
                        </Link>
                       
                    </li>
                </ul>

                {/* Responsive Menue */}
                <ul className={`duration-300 md:hidden w-full h-screen text-xl text-white fixed bg-[#2699fb]
                    ${toggle ? 'left-[0]':'left-[-100%]'}  top-[65px]`}>
                    <li className='border-b-white border-b' onClick={()=>setToggle(!toggle)}>
                        <Link className='block w-full p-4'  href="#" onClick={() => { 
                            scrollTo('home') 
                            setToggle(!toggle)
                            } }>
                            Home
                        </Link>
                    </li>
                    
                    <li className='border-b-white border-b'>
                        <Link className='block w-full p-4' href="#" onClick={() =>{
                            scrollTo('about')
                            setToggle(!toggle)
                        }} > 
                        About
                        </Link>
                    </li>
                    <li className=' border-b-white border-b'>
                        <Link className='block w-full p-4' href="#" onClick={() => {
                             scrollTo('projects')
                             setToggle(!toggle)
                            }}>
                        Projects
                       </Link> 
                    </li>
                    <li className=' border-b-white border-b'>
                        <Link className='block w-full p-4' href="#" onClick={() => {
                             scrollTo('certifications')
                             setToggle(!toggle)
                            }}>
                        Certifications
                       </Link> 
                    </li>
                    <li className=' border-b-white border-b'>
                        <Link className='block w-full p-4'  href="#" onClick={() =>{ 
                            scrollTo('contact')
                            setToggle(!toggle)
                        }}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='whatsapp'>
                <a className="whatsapp-for-desktop" href="https://web.whatsapp.com/send?phone=+919622572247" target="_blank" rel="noopener noreferrer" title='Contact Us'>
                <FaWhatsapp/>
                </a>
                <a className="whatsapp-for-mobile" href="https://wa.me/+919622572247" target="_blank" rel="noopener noreferrer" title='Contact Us'>
                <FaWhatsapp/>
                </a>
          </div>
        </div>
    ); 
}

export default Header;