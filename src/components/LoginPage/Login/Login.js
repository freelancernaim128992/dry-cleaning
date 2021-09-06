import React, { useContext } from 'react';
import Footer from '../../ShareComponents/Footer/Footer';
import Navbar from '../../ShareComponents/Navbar/Navbar';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import googleImg from "../../../images/btn-logo.jpg"

firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const getUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken)
        }).catch(function (error) {
            // Handle error
        });
    }
    const handleGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                const email = user.email;
                const photoURL = user.photoURL;
                const newUser = { ...userInfo }
                newUser.email = email;
                newUser.photoURL = photoURL;
                setUserInfo(newUser);
                history.replace(from);
                getUserToken();
                sessionStorage.setItem('email', email)
                sessionStorage.setItem('photo', photoURL)
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                console.log(error)
            });
    }
    return (
        <>
            <Navbar />
            <div className="login-container">
                <div className="w-25 m-auto my-5">
                    <form className="form-style shadow mb-5">
                        <div className="form-header">
                            <h1 className="text-center">LOGIN</h1>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your Password" />
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <button type="submit" className="btn btn-primary btn-brand">Submit</button>
                        </div>
                        <p>Forget Password? <a href="/">Click Here</a></p>
                        <p>Don't Have an Account? <a href="/">Create Account</a></p>
                    </form>
                    <div className="text-center loginBtn">
                        <button onClick={handleGoogle} className="btn"><img src={googleImg} alt="" /> Continue With Google</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;