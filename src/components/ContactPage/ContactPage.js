import React from 'react';
import Footer from '../ShareComponents/Footer/Footer';
import Navbar from '../ShareComponents/Navbar/Navbar';
import Contact from './Contact/Contact';

const ContactPage = () => {
    return (
        <div>
            <Navbar />
            <Contact />
            <Footer />
        </div>
    );
};

export default ContactPage;