import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

function Header(props) {
    const [toggle, setToggle]=useState(false);
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1000px] py-[12px] items-center flex justify-between mx-auto'>
                <div className='text-3xl fond-bold'>
                    Tech Track
                </div>
                { toggle ? 
                    <AiOutlineClose  onClick={()=>setToggle(!toggle)} className='md:hidden block text-white text-2xl'/>
                    :
                    <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='md:hidden block text-white text-2xl'/>
                }
                
                
                <ul className='hidden md:flex  text-white gap-10'>
                    <li>
                        Home
                    </li>
                    <li>
                        Company
                    </li>
                    <li>
                        Resources
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>

                {/* Responsive Menue */}
                <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black 
                    ${toggle ? 'left-[0]':'left-[-100%]'}  top-[92px]`}>
                    <li className='p-5'>
                        Home
                    </li>
                    <li className='p-5'>
                        Company
                    </li>
                    <li className='p-5'>
                        Resources
                    </li>
                    <li className='p-5'>
                        About
                    </li>
                    <li className='p-5'>
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;