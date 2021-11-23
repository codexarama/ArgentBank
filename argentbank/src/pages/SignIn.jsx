import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';

import { login } from '../_store/middlewares/authMiddleware';

/**
 *
 * @returns
 */
export default function SignIn() {
  useEffect(() => {
    document.title = 'Argent Bank | Sign In';
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

//   useEffect(() => {}, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(email, password, rememberMe));
    setSubmitted(true);
  };

  // const user = useSelector((state) => state.authReducer.user);
  // console.log(user);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form action="" onSubmit={handleSubmit} id="sign-in-form">
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              autoComplete="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            {submitted && !email && (
              <small className="input-error">Email is required</small>
            )}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            {submitted && !password && (
              <small className="input-error">Password is required</small>
            )}
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={() => {
                setRememberMe(!rememberMe);
              }}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input type="submit" value="Sign In" className="sign-in-button" />
        </form>
      </section>
    </main>
  );
}
