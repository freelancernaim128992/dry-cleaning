import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
      <header>
        <div className="nav-container shadow rounded">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img src={logo} className="img-fluid logo-style" alt=""/>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu-container">
                  <li className="nav-item ms-5">
                    <a className="nav-link" href="/home">Home</a>
                  </li>
                  <li className="nav-item ms-5">
                    <a className="nav-link" href="/about">About Us</a>
                  </li>
                  <li className="nav-item ms-5">
                    <a className="nav-link" href="/services">Services</a>
                  </li>
                  <li className="nav-item ms-5">
                    <a className="nav-link" href="/reviews">Reviews</a>
                  </li>
                  <li className="nav-item ms-5">
                    <a className="nav-link" href="/contact">Contact Us</a>
                  </li>
                </ul>
                <Link to="/login"><button className="btn btn-brand">LogIn</button></Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
};

export default Navbar;