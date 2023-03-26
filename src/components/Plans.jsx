import React from 'react';
import PlanCard from './PlanCard';
import Single from '../assets/img/single.png'
import Double from '../assets/img/double.png'
import Triple from '../assets/img/triple.png'

function Plans(props) {
    return (
        <div className='py-[100px] px-2'>
            <div className="max-w-[1000px] mx-auto md:grid grid-cols-3 gap-5">
                <PlanCard title="Web Development" price="$149" cardIcon={Single}/>
                <PlanCard title="Digital Marketing" price="$199" cardIcon={Double}/>
                <PlanCard title="Ethical Hacking" price="$349" cardIcon={Triple}/>
                {/* <div className='shadow-xl h-[300px] my-4 bg-gray-100 hover:scale-105 duration-500'></div>
                <div className='shadow-xl h-[300px] my-4 hover:scale-105 duration-500'></div> */}
            </div>
        </div>
    );
}

export default Plans;