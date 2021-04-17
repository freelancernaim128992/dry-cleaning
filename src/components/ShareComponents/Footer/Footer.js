import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css'

const Footer = () => {
    const noNamed = [
        {name: 'H#234 (0th Floor), Road #30'},
        {name: 'New DOHS, Dhanmondi,Dhaka,Bangladesh'}
    ]
    const company = [
        {name: 'About'},
        {name: 'Services'},
        {name: 'Testimonial'},
        {name: 'Terms of conditions'},
        {name: 'Submit Listing'}
    ]
    const quickLink = [
        {name: 'Quick Links'},
        {name: 'Rentals'},
        {name: 'Orders'},
        {name: 'Contact'},
        {name: 'Our Blog'}
    ]
    const about = [
        {name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequatur laboriosam eligendi possimus quos accusantium ullam fuga nam harum eos!'}
    ]
    return (
        <footer className="pt-5">
            <div className="d-flex justify-content-center">
                <div className="w-75 rounded row">
                    <FooterCol title={""} menuInfo={noNamed}></FooterCol>
                    <FooterCol title={"Company"} menuInfo={company}></FooterCol>
                    <FooterCol title={"Quick Links"} menuInfo={quickLink}></FooterCol>
                    <FooterCol title={"About Us"} menuInfo={about}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><i class="flaticon-facebook-logo"></i></a></li>
                            <li className="list-inline-item"><a href="//instragram.com"><i class="flaticon-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><i class="flaticon-linkedin"></i></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><i class="flaticon-youtube"></i></a></li>
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