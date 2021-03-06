import React, { useState, useEffect } from 'react';

// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../_store/middlewares/authMiddleware';

/**
 * Render the SignIn component
 * @returns {Reactnode} jsx injected in DOM
 */
 export default function SignIn() {
  useEffect(() => {
    document.title = 'Argent Bank | Sign In';
    document.body.classList.add('bg-dark')
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChangeEmail = (event) => setEmail(event.target.value)
  const handleChangePassword = (event) => setPassword(event.target.value)
  const handleChangeRememberMe = () => setRememberMe(!rememberMe)

  const noEmail = submitted && !email
  const noPassword = submitted && !password

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(email, password, rememberMe));
    setSubmitted(true);
  };

  const auth = (state) => state.authReducer;
  const authUser = useSelector(auth);
  console.log(authUser);
  console.log(authUser.error);
  const wrongEntries = submitted && authUser.error && (email && password)

  return (
    <main className="main sign-in">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form action="" onSubmit={handleSubmit} id="sign-in-form">
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleChangeEmail}
              autoComplete="username"
            />
            {noEmail && <small>Email is required</small>}
            {/* {submitted && !email && <small>Email is required</small>} */}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChangePassword}
              autoComplete="current-password"
            />
            {noPassword && <small>Password is required</small>}
            {/* {submitted && !password && <small>Password is required</small>} */}
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={handleChangeRememberMe}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input type="submit" value="Sign In" className="sign-in-button" />
        </form>
      </section>
      <section className="input-alert">
        {wrongEntries && (
        // {submitted && email && password && authUser.error && (
          <small className="input-alert--msg">
            Wrong email or password, please check
          </small>
        )}
      </section>
    </main>
  );
}
