import React from 'react';
import './SideBar.css'
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="p-5">
            <Link to="/"><img src={logo} alt=""/></Link>
            <aside className="mt-5">
                <ul className="list-unstyled sidebar-container">
                    <li><a href="/order">Order</a></li>
                    <li><a href="/">Order List</a></li>
                    <li><a href="/review">Review</a></li>
                    <li><a href="/">Add Service</a></li>
                    <li><a href="/">Make Admin</a></li>
                    <li><a href="/">Manage Service</a></li>
                </ul>
            </aside>
        </div>
    );
};

export default SideBar;