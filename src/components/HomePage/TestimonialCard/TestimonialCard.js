import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({testimonialInfo}) => {
    return (
        <div className="col-md-3">
            <div className="shadow-lg bg-white rounded p-3">
                <div className="d-flex">
                    <img src={testimonialInfo.img} className="testimonial-img-style" alt=""/>
                    <h4 className="mt-4 ms-2">{testimonialInfo.name}</h4>
                </div>
                <div className="mt-5">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, nobis asperiores. Magni sunt nemo, hic perspiciatis in quam ipsum, quasi, nam quisquam blanditiis illo corporis quaerat aliquam. Alias, odio veniam.</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;