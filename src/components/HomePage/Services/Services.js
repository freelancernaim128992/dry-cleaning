import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        const url = 'https://aqueous-coast-40888.herokuapp.com/services';
        fetch(url)
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])
    return (
        <section className="py-5" style={{ backgroundColor: '#f7f7f7' }}>
            <div className="text-center">
                <h5 className="mt-5 fw-bold textStyle">SERVICES LIST</h5>
                <h1 className="my-5">Always the Best Service</h1>
            </div>
            <div className="d-flex justify-content-center py-5">
                <div className="row w-75">
                    {
                        serviceData.map(serviceInfo => <ServiceCard key={serviceInfo._id} info={serviceInfo}></ServiceCard>)
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