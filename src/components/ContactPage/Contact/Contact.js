import React from 'react';
import map from '../../../images/map.png'
import './Contact.css'

const Contact = () => {
    return (
        <section className="pb-3">
            <div className="text-center">
                <h5 className="fw-bold contactTextStyle">CONTACT</h5>
                <h2 className="fw-bold">Let Us handle your <br />Project, Professionally.</h2>
            </div>
            <div className="row w-75 m-auto mt-5">
                <div className="col-md-4 my-3">
                    <img src={map} className="img-fluid" alt="" />
                </div>
                <div className="col-md-8">
                    <form className="form-style shadow">
                        <div className="input-container">
                            <input className="form-control" type="text" placeholder="First Name" />
                            <input className="form-control" type="text" placeholder="Last Name" />
                            <input className="form-control" type="email" placeholder="Email Address" />
                            <input className="form-control" type="text" placeholder="Phone Number" />
                        </div>
                        <input type="text" className="input-style form-control" placeholder="Your Message" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;