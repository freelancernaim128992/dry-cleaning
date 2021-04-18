import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Order.css'

const Order = () => {
    const [shipmentData, setShipmentData] = useState({});
    const [userInfo,setUserInfo] = useContext(UserContext);
    // const handlePaymentProcess = paymentId => {
    //     const paymentDetails = {paymentId}
    // }
    const handleBlur = (e) => {
        const newData = {...shipmentData}
        newData[e.target.name] = e.target.value;
        setShipmentData(newData)
    }
    const handleOrderSubmit = () => {

    }
    return (
        <section>
            <h1 className="ps-3">ORDER</h1>
            <div className="form-container">
                <div className="form-inner">
                    <form onSubmit={handleOrderSubmit} >
                        <div className="mb-5">
                            <input onBlur={handleBlur} type="text" name="name" className="form-control p-3 shadow border-0 input-style" placeholder="Your Name"/>
                        </div>
                        <div className="mb-5">
                            <input onBlur={handleBlur} type="email" name="email" className="form-control p-3 shadow border-0 input-style" placeholder="Your Email" />
                        </div>
                        <div className="mb-5">
                            <input onBlur={handleBlur} type="text" name="serviceTitle" className="form-control p-3 shadow border-0 input-style" defaultValue={userInfo.title} placeholder="Service Title" />
                        </div>
                        <button type="submit" className="btn btn-brand">Submit</button>
                    </form>
                    <h2 className="py-3">Pay</h2>
                    <ProcessPayment></ProcessPayment>
                    <p className="pt-5">Your Service Charged Will be ${userInfo.price}</p>
                    
                </div>
            </div>
        </section>
    );
};

export default Order;