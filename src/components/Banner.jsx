import React from 'react';
import Typed from 'react-typed';
function Banner(props) {
    return (
        <div className='bg-[#2699fb] w-full py-[100px]'>
            <div className='max-w-[1000px] font-bold my-[60px] mx-auto text-center'>
                <div className='text-xl md:text-3xl md:p-[24px]'>
                    Learn with us
                </div>
                <h2 className='text-white text-3xl md:text-[60px] md:p-[24px]'>Grow with us</h2>
                <div className='text-[20px] md:text-[50px] md:p-[24px] text-white'>
                    Learn
                    <Typed
                        className='pl-2'
                        strings={['Web Development', 'Digital Marketing', 'Ethical Hacking']}
                        typeSpeed={100}
                        backSpeed={50}
                        loop={true}
                    />
                </div>
                <button className='bg-black text-white p-3 rounded'>Get Started</button>
            </div>
        </div>
    );
}

export default Banner;