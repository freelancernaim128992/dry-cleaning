import React from 'react';
import dryCleaning from '../../../images/dry-cleaning.jpg'
import gowns from '../../../images/gowns.jpg'
import leather from '../../../images/leather.jpeg'
import curtains from '../../../images/curtains.png'
import ServiceCard from '../ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
    const serviceData = [
        {
            img: dryCleaning,
            name: 'DRY CLEANING'
        },
        {
            img: gowns,
            name: 'WEEDING GOWNS'
        },
        {
            img: leather,
            name: 'LEATHER SUEDE'
        },
        {
            img: curtains,
            name: 'CURTAINS'
        }
    ]
    return (
        <section className="py-5">
            <div className="text-center">
                <h5 className="mt-5 fw-bold textStyle">SERVICES LIST</h5>
                <h1 className="my-5">Always the Best Service</h1>
            </div>
            <div className="d-flex justify-content-center pt-5">
                <div className="row w-75">
                    {
                        serviceData.map(serviceInfo => <ServiceCard info={serviceInfo}></ServiceCard>)
                    }
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/"><button className="btn btn-brand">Explore More</button></Link>
            </div>
        </section>
    );
};

export default Services;