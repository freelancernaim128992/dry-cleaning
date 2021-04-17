import React from 'react';
import workBg from '../../../images/work-system-bg.png'
import WorkSystemsCard from '../WorkSystemsCard/WorkSystemsCard';

const OurWorksSystem = () => {
    const workBgStyle = {
        backgroundImage: `linear-gradient(45deg, #ffffff6e, #ffffff6e),url(${workBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    const workSystemData = [
        {
            name: 'Collect Dirty Clothes',
            icon: 'flaticon-washing-machine'
        },
        {
            name: 'Choose Pickup Time',
            icon: 'flaticon-calendar'
        },
        {
            name: 'We’ll Clean & Dry',
            icon: 'flaticon-wipe'
        },
        {
            name: 'Deliver to Doorstep',
            icon: 'flaticon-food-delivery'
        }
        
    ]
    return (
        <section className="py-5" style={workBgStyle}>
            <div className="text-center">
                <h5 className="mt-5 fw-bold textStyle">HOW WE WORKS</h5>
                <h1 className="my-5">Follow 4 Easy Steps</h1>
            </div>
            <div className="d-flex justify-content-center pt-5">
                <div className="row w-75">
                    {
                        workSystemData.map(info => <WorkSystemsCard info={info}></WorkSystemsCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurWorksSystem;