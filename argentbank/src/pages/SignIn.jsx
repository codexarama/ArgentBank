import React, { useState } from 'react';
import axios from 'axios';

import NavbarIn from '../components/NavbarIn';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    const emailError = document.querySelector('.email.error-input');
    const passwordError = document.querySelector('.password.error-input');

    axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/user/login',
      // url: `${process.env.REACT_APP_API_URL}login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((result) => {
        console.log(result);
        if (result.data.error) {
          emailError.innerHTML = result.data.error.email;
          passwordError.innerHTML = result.data.error.password;
        } else {
          window.location = '/profile';
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <NavbarIn />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form action="" onSubmit={handleLogin} id="sign-in-form">
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                autoComplete="current-username"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <div className="email error-input"></div>
              {/* <div className="email error">Unknown user</div> */}
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
              <div className="password error-input"></div>
              {/* <div className="password error">Wrong password</div> */}
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <input type="submit" value="Sign In" className="sign-in-button" />
          </form>
        </section>
      </main>
    </>
  );
}
