import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';

function Login() {
  const signIn = () => {};

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png'
          alt='WhatsApp'
        />
        <div className='login__text'>
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
