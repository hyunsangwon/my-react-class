import { Button } from '@mui/material';
import React from 'react';
import './Signin.css';
import logo from './assets/Google-Logo-Icon-Transparent-Image.png';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebase/setup';

const Signin = () => {
  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="signin-box">
        <img src={logo} alt="" />
        <h1 className="signin-title">Create your google clone account</h1>
        <h3 className="signin-title">Click the signin button</h3>
        <Button onClick={googleSignin} variant="contained">
          Signin with google
        </Button>
      </div>
    </div>
  );
};

export default Signin;
