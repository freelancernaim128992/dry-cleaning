import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({info}) => {
    return (
        <div className="col-md-3 text-center shadow rounded me-3 card-container">
            <div class="card" class="card-info">
                <img src={info.img} class="card-img-top image-style" alt="..." />
                <div class="card-body">
                    <h4>{info.name}</h4>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, fuga? Aperiam ratione debitis eius cumque?</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;