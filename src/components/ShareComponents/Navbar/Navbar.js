import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png'
import './Navbar.css'

const Navbar = () => {
  const [userInfo, setUserInfo] = useContext(UserContext);
  const { email, photoURL } = userInfo;
  const handleImg = () => {
    const showDiv = document.getElementById("profile")
    showDiv.classList.toggle("active")
  }
  let photo;
  console.log(photoURL);
  if (photoURL == undefined) {
    photo = sessionStorage.getItem('photo');
  } else if (photoURL != undefined) {
    photo = photoURL;
  }
  return (
    <header>
      <div id="parentNav" className="nav-container rounded">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} className="img-fluid logo-style" alt="" />
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
                  <a className="nav-link" href="/blogs">Blogs</a>
                </li>
                <li className="nav-item ms-5">
                  <a className="nav-link" href="/services">Services</a>
                </li>
                <li className="nav-item ms-5">
                  <a className="nav-link" href="/home#review">Reviews</a>
                </li>
                <li className="nav-item ms-5">
                  <a className="nav-link" href="/contact">Contact Us</a>
                </li>
              </ul>
              {
                email || sessionStorage.getItem('token') ?
                  <div className="position-relative">
                    <img onClick={handleImg} className="profileImg" src={photo} alt="" />
                    <div className="profile" id="profile">
                      <ul>
                        <li>
                          <Link to="/order">Your Profile</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  : <Link to="/login"><button className="btn btn-brand">LogIn</button></Link>
              }
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;