import React, { useState } from 'react';

import NavbarIn from '../components/NavbarIn';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <NavbarIn />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form action="" onSubmit={handleSubmit} id="sign-in-form">
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                autoComplete="current-username"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              {submitted && !email && <div className="input-error">Username is required</div>}
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
              {submitted && !password && <div className="input-error">Password is required</div>}
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
