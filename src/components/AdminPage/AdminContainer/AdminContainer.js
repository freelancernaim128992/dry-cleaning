import React from 'react';
import Order from '../Order/Order'
import SideBar from '../../ShareComponents/SideBar/SideBar'

const AdminContainer = () => {
    return (
        <div className="row w-100">
            <div className="col-md-3 p-0">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9 p-0">
                <Order></Order>
            </div>
        </div>
    );
};

export default AdminContainer;