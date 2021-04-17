import React from 'react';
import Footer from '../../ShareComponents/Footer/Footer';
import Header from '../Header/Header';
import OurWorksSystem from '../OurWorksSystem/OurWorksSystem';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <OurWorksSystem />
            <Services />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;