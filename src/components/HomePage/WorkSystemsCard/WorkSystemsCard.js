import React from 'react';
import './WorkSystemsCard.css'

const WorkSystemsCard = ({info}) => {
    return (
        <div className="col-md-3 text-center">
            <div className="d-flex justify-content-center text-center">
                <div className="icon">
                    <i className={info.icon}></i>
                </div>
            </div>
            <div>
                <h3 className="pt-3">{info.name}</h3>
                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
};

export default WorkSystemsCard;