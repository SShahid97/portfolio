import React from 'react';
import {FaFacebookSquare, FaTwitterSquare, FaInstagram, FaGithubSquare} from "react-icons/fa";

function Footer(props) {
    return (
        <div className='bg-[#2699fb] w-full'>
             <div className='max-w-[1000px] p-2 mx-auto  md:grid grid-cols-3'>
                <div className="col-span-1 py-5">
                    <h1 className='text-2xl font-bold my-2'>Tech Track</h1>
                    <p className='my-2 text-white text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sunt commodi consequuntur distinctio ratione fuga amet! Esse nesciunt ea magni?
                    </p>
                   <div className='flex justify-between text-white w-[80%] mt-8'>
                        <FaFacebookSquare className='text-2xl'/>
                        <FaTwitterSquare className='text-2xl'/>
                        <FaInstagram className='text-2xl'/>
                        <FaGithubSquare className='text-2xl'/>
                   </div>
                </div>
                <div className="col-span-2 py-10 flex flex-row justify-between">
                    <div>
                        <h2 className='fond-bold px-2'>Solutions</h2>
                        <ul className={`w-full text-white`}>
                            <li className='p-2'>
                                Analytics
                            </li>
                            <li className='p-2'>
                                Marketing
                            </li>
                            <li className='p-2'>
                                Commerce
                            </li>
                            <li className='p-2'>
                                Insights
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='fond-bold px-2'>Support</h2>
                        <ul className={`w-full text-white`}>
                            <li className='p-2'>
                                Pricing
                            </li>
                            <li className='p-2'>
                                Documentation
                            </li>
                            <li className='p-2'>
                                Guides
                            </li>
                            <li className='p-2'>
                                API Status
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='fond-bold px-2'>Company</h2>
                        <ul className={`w-full text-white`}>
                            <li className='p-2'>
                                About
                            </li>
                            <li className='p-2'>
                                Blog
                            </li>
                            <li className='p-2'>
                                Jobs
                            </li>
                            <li className='p-2'>
                                Careers
                            </li>
                        </ul>
                    </div>
                </div>
             </div>
        </div>
    );
}

export default Footer;