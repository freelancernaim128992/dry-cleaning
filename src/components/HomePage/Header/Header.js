import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import headerBg from '../../../images/header-bg.jpg'

const Header = () => {
    const headerBgStyle = {
        backgroundImage: `linear-gradient(45deg, #ffffffa1, #ffffffa1),url(${headerBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div style={headerBgStyle}>
            <Navbar />
            <HeaderMain />
        </div>
    );
};

export default Header;