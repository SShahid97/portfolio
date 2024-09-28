import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { FaWhatsapp } from 'react-icons/fa';
import { MdDownloadForOffline } from "react-icons/md";
import HeaderLink, { MobileHeaderLink } from './HeaderLink';
import { headerLinks } from '../data/static';
import Logo from './Logo';
// import ShahidShowkatMalikCV from "../assets/files/ShahidShowkatMalikCV.pdf";


function Header({appTitle}) {
    // debugger
    const [toggle, setToggle]=useState(false);

    const scrollTo = ( id) => {
        const element = document.getElementById(id);
        const yOffset = -90;
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };

    return (
        <header style={{zIndex:"1000"}} className='bg-primary shadow-sm p-1 sticky left-0 top-0 '>
            <div className='max-w-[1000px] py-[12px] items-center flex justify-between mx-auto'>
                <Logo appTitle={appTitle}/>
                {toggle ? 
                    <AiOutlineClose onClick={()=>setToggle(!toggle)} className='md:hidden block text-white text-3xl'/>
                    :
                    <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='md:hidden block text-white text-3xl'/>
                }

                <ul className='hidden md:flex  text-white gap-x-2'>
                    {headerLinks.map((item)=>{
                        return (
                            <HeaderLink key={item.link} onClick={() => scrollTo(item.link)} title={item.title}/>
                        )
                    })}
                    <li className='flex flex-row items-center px-2 py-4'>
                        <a  href={process.env.REACT_APP_RESUME_LINK} target='_blank' className='flex flex-row items-center no-underline gap-1 border-b-2 border-b-primary ' rel="noreferrer" >
                            <MdDownloadForOffline className='text-xl'/>
                            <span>Download Resume</span>
                        </a>
                    </li>
                </ul>

                {/* Responsive Menu */}
                <ul className={`duration-300 md:hidden w-full h-screen text-xl text-white fixed bg-primary
                    ${toggle ? 'left-[0]':'left-[-100%]'}  top-[65px]`}>
                     {headerLinks.map((item)=>{
                        return (
                            <MobileHeaderLink key={item.link} onClick={() =>{
                                scrollTo(item.link)
                                setToggle(!toggle)
                            }} title={item.title}/>
                        )
                    })}
                    <li className=' border-b-white border-b'>
                         <a  href={process.env.REACT_APP_RESUME_LINK} target='_blank' className='flex flex-row gap-1 items-center w-full p-4' rel="noreferrer" >
                            <MdDownloadForOffline className='text-3xl'/>
                            <span>Download Resume</span>
                        </a>
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
        </header>
    ); 
}

export default Header;