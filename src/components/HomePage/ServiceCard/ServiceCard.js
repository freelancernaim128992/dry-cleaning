import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import './ServiceCard.css'

const ServiceCard = ({ info }) => {
    const history = useHistory();
    const [UserInfo, setUserInfo] = useContext(UserContext);
    const handleService = () => {
        history.push("/order")
        const newInfo = { ...UserInfo }
        newInfo.title = info.name;
        newInfo.price = info.price;
        console.log(newInfo);
        setUserInfo(newInfo)
    }
    return (
        <div className="col-md-3 text-center card-style">
            <div>
                <img onClick={handleService} src={info.photo} className="img-fluid image-style" alt="" />
            </div>
            <div className="mt-5">
                <h4>{info.title}</h4>
                <p className="text-secondary">{info.description}</p>
                <h5>$ {info.price}</h5>
            </div>
        </div>
    );
};

export default ServiceCard;