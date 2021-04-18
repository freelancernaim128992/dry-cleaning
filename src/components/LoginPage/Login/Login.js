import React, { useContext } from 'react';
import Footer from '../../ShareComponents/Footer/Footer';
import Navbar from '../../ShareComponents/Navbar/Navbar';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const getUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token',idToken)
          }).catch(function(error) {
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
            const newUser = {...userInfo}
            newUser.email = email;
            newUser.photoURL = photoURL;
            setUserInfo(newUser);
            history.replace(from);
            getUserToken();
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
            <h1 className="text-center mt-5 pt-5">LOGIN WITH</h1>
            <div className="d-flex justify-content-center my-5">
                <div className="text-center loginBtn">
                    <button onClick={handleGoogle} className="btn">Continue With Google</button>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Login;