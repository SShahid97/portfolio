import React from 'react';

function NewLetter(props) {
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1000px] md:flex mx-auto justify-between py-[50px]'>
                <div className='m-2'>
                    <h1 className='text-[20px] md:text-[40px] font-bold text-white'>
                        Want to learn latest I.T skills?
                    </h1>
                    <span className='text-white'>
                        Sign up to our newsletter and stay up to date.
                    </span>
                </div>
                <div className='m-2'>
                    <input type="text" className='p-3 mr-2 mb-2 rounded text-slate-300' placeholder='Email'/>
                    <button className='bg-black text-white p-3 rounded'>Notify Me</button>
                    <br/>
                    <p className='text-white'>
                        We care about the portection of your data. Read our <br/>
                        <a href='' className='text-black'>Privacy Policy</a> 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NewLetter;