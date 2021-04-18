import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({testimonialInfo}) => {
    return (
        <div className="col-md-3">
            <div className="shadow-lg bg-white rounded p-3">
                <div className="d-flex">
                    <img src={testimonialInfo.photo} className="testimonial-img-style" alt=""/>
                    <h4 className="mt-4 ms-2">{testimonialInfo.title}</h4>
                </div>
                <div className="mt-5">
                    <p>{testimonialInfo.description}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;