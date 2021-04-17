import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import './ServiceCard.css'

const ServiceCard = ({info}) => {
    const history = useHistory();
    const [UserInfo, setUserInfo] = useContext(UserContext);
    const handleService = () => {
        history.push("/order")
        const newInfo = {...UserInfo}
        newInfo.title = info.name;
        newInfo.price = info.price;
        console.log(newInfo);
        setUserInfo(newInfo)
    }
    return (
        <div className="col-md-3 text-center">
            <div>
                <img onClick={handleService} src={info.img} className="img-fluid image-style" alt=""/>
            </div>
            <div className="mt-5">
                <h4>{info.name}</h4>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minima expedita cumque veritatis, nemo error.</p>
                <h5>$ {info.price}</h5>
            </div>
        </div>
    );
};

export default ServiceCard;