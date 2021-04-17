import React from 'react';
import testimonialBg from '../../../images/testimonialBg.png'
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import mark from '../../../images/mark.jpg'
import jhon from '../../../images/jhon.jpg'
import jenny from '../../../images/jenny.jpg'
import tyrese from '../../../images/tyrese.jpg'

const Testimonials = () => {
    const testimonialBgStyle = {
        backgroundImage: `url(${testimonialBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    const testimonialData = [
        {
            name: 'Mark Wood',
            img: mark
        },
        {
            name: 'Jhon Joe',
            img: jhon
        },
        {
            name: 'Jenny Stewe',
            img: jenny
        },
        {
            name: 'Tyrese Gibson',
            img: tyrese
        }
    ]
    return (
        <section className="py-5" style={testimonialBgStyle}>
            <div className="text-center">
                <h5 className="mt-5 fw-bold textStyle">TESTIMONIALS</h5>
                <h1 className="my-5">What They Are Talking</h1>
            </div>
            <div className="d-flex justify-content-center pt-5">
                <div className="row w-75">
                    {
                        testimonialData.map(info => <TestimonialCard testimonialInfo={info}></TestimonialCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;