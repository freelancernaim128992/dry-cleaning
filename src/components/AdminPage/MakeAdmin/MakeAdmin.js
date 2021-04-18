import React, { useState } from 'react';
import SideBar from '../../ShareComponents/SideBar/SideBar';

const MakeAdmin = () => {
    const [adminInfo, setAdminInfo] = useState({});
    const handleBlur = (e) => {
        const email = {email: e.target.value};
        setAdminInfo(email);
    }
    const handleMakeAdmin = () =>{
        const url = 'http://localhost:5000/adminList';
        fetch(url,{
            method:'POST',
            headers: {'content-type': 'application/json '},
            body: JSON.stringify(adminInfo)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result,'successFully Connected')
        })
    }
    return (
        <div className="row w-100">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9 mt-5">
                <h1 className="ms-3">Make Admin</h1>
                <div className="form-container">
                    <div className="form-inner">
                        <form onSubmit={handleMakeAdmin}>
                            <div className="mb-5">
                                <input onBlur={handleBlur} type="text" className="form-control p-3 shadow-lg border-0" placeholder="Enter Email" />
                            </div>
                            <button type="submit" className="btn btn-brand">Submit</button>
                        </form>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default MakeAdmin;