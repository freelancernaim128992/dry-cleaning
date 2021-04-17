import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({info}) => {
    return (
        <div className="col-md-3 text-center">
            <div>
                <img src={info.img} className="img-fluid image-style" alt=""/>
            </div>
            <div className="mt-5">
                <h4>{info.name}</h4>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minima expedita cumque veritatis, nemo error.</p>
            </div>
        </div>
    );
};

export default ServiceCard;