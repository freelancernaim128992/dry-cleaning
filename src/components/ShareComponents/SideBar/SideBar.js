import React, { useContext, useEffect, useState } from 'react';
import './SideBar.css'
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SideBar = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        const url = 'https://vast-savannah-28483.herokuapp.com/isAdmin'
        fetch(url,{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: userInfo.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [isAdmin])
    console.log(userInfo)
    return (
        <div className="p-5">
            <Link to="/"><img src={logo} alt=""/></Link>
            <aside className="mt-5">
                <ul className="list-unstyled sidebar-container">
                    <li><a href="/order">Order</a></li>
                    <li><a href="/">Order List</a></li>
                    <li><a href="/review">Review</a></li>
                    {isAdmin && <div>
                        <li><a href="/addService">Add Service</a></li>
                        <li><a href="/makeAdmin">Make Admin</a></li>
                        <li><a href="/manageService">Manage Service</a></li>
                    </div>}
                </ul>
            </aside>
        </div>
    );
};

export default SideBar;