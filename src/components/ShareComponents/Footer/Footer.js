import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css'

const Footer = () => {
    const noNamed = [
        { name: 'H#234 (0th Floor), Road #30', id: 1 },
        { name: 'New DOHS, Dhanmondi,Dhaka,Bangladesh', id: 2 }
    ]
    const company = [
        { name: 'About', id: 3 },
        { name: 'Services', id: 4 },
        { name: 'Testimonial', id: 5 },
        { name: 'Terms of conditions', id: 6 },
        { name: 'Submit Listing', id: 7 }
    ]
    const quickLink = [
        { name: 'Quick Links', id: 8 },
        { name: 'Rentals', id: 9 },
        { name: 'Orders', id: 10 },
        { name: 'Contact', id: 11 },
        { name: 'Our Blog', id: 12 }
    ]
    const about = [
        { name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequatur laboriosam eligendi possimus quos accusantium ullam fuga nam harum eos!', id: 13 }
    ]
    return (
        <footer className="pt-5">
            <div className="d-flex justify-content-center">
                <div className="w-75 rounded row">
                    <FooterCol key={noNamed.map(key => key.id)} title={""} menuInfo={noNamed}></FooterCol>
                    <FooterCol key={company.map(key => key.id)} title={"Company"} menuInfo={company}></FooterCol>
                    <FooterCol key={quickLink.map(key => key.id)} title={"Quick Links"} menuInfo={quickLink}></FooterCol>
                    <FooterCol key={about.map(key => key.id)} title={"About Us"} menuInfo={about}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><i className="flaticon-facebook-logo"></i></a></li>
                            <li className="list-inline-item"><a href="//instragram.com"><i className="flaticon-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><i className="flaticon-linkedin"></i></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><i className="flaticon-youtube"></i></a></li>
                        </ul>
                    </FooterCol>
                    <div className="text-center text-white">
                        <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;