import React, { useEffect, useState } from 'react';
import testimonialBg from '../../../images/testimonialBg.png'
import TestimonialCard from '../TestimonialCard/TestimonialCard'

const Testimonials = () => {
    const testimonialBgStyle = {
        backgroundImage: `url(${testimonialBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    const [testimonialData, setTestimonialData] = useState([])
    useEffect(() => {
        const url = 'https://aqueous-coast-40888.herokuapp.com/reviews'
        fetch(url)
            .then(res => res.json())
            .then(data => setTestimonialData(data))
    }, [])
    return (
        <section id="review" className="py-5" style={testimonialBgStyle}>
            <div className="text-center">
                <h5 className="mt-5 fw-bold textStyle">TESTIMONIALS</h5>
                <h1 className="my-5">What They Are Talking</h1>
            </div>
            <div className="d-flex justify-content-center pt-5">
                <div className="row w-75">
                    {
                        testimonialData.map(info => <TestimonialCard key={info._id} testimonialInfo={info}></TestimonialCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;