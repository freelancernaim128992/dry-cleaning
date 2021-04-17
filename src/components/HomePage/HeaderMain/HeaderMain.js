import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../../../images/header-img.jpg'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className="mt-5 py-5">
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    <div className="col-md-6 mt-4">
                        <h1 className="heading-style">Laundry and <br/> Dry Cleaning <br/>Services</h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cum mollitia iusto illum eveniet aperiam. Omnis optio molestiae temporibus maxime!</p>
                        <Link to="/order"><button className="btn btn-brand my-3">Order Now</button></Link>
                    </div>
                    <div className="col-md-6 rounded">
                        <img src={headerImg} className="img-fluid rounded" alt=""/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;