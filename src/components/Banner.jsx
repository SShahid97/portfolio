import React from 'react';
import Typed from 'react-typed';
function Banner(props) {
    const skills = [
        'Javascript', 
        'Typescript',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'React',
        'Redux-toolkit',
        'RTK',
        'Nodejs',
        'Nestjs',
        'MongoDB',
        'SQL',
        'Python'
    ];

    return (
        <div id="home" className='bg-[#2699fb] w-full py-[100px]'>
            <div className='max-w-[1000px] font-bold my-11 mx-auto text-center'>
                <div className='text-xl md:text-3xl md:p-[24px]'>
                    Hello, my name is Shahid and I am a  
                </div>
                <h2 className='text-white text-3xl md:text-[60px] md:p-[24px]'>Software Developer</h2>
                <div className='text-[20px] md:text-[50px] md:p-[24px] text-white'>
                   My Skills:
                    <Typed
                        className='pl-4'
                        strings={skills}
                        typeSpeed={100}
                        backSpeed={50}
                        loop={true}
                    />
                </div>
                {/* <button className='bg-black text-white p-3 rounded'>Get Started</button> */}
            </div>
        </div>
    );
}

export default Banner;