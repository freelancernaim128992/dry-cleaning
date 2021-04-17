import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './Order.css'

const Order = () => {
    const [userInfo,setUserInfo] = useContext(UserContext);
    return (
        <section>
            <h1 className="ps-3">ORDER</h1>
            <div className="form-container">
                <div className="form-inner">
                    <form>
                        <div className="mb-5">
                            <input type="text" className="form-control p-3 shadow border-0 input-style" placeholder="Your Name"/>
                        </div>
                        <div className="mb-5">
                            <input type="email" className="form-control p-3 shadow border-0 input-style" placeholder="Your Email" />
                        </div>
                        <div className="mb-5">
                            <input type="text" className="form-control p-3 shadow border-0 input-style" value={userInfo.title} placeholder="Service Title" />
                        </div>
                        <p>Your Service Charged Will be ${userInfo.price}</p>
                        <button type="submit" className="btn btn-brand">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Order;