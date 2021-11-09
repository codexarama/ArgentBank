import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../img/argentBankLogo.png';

export default function Navbar() {
  // VERIFIER
  // RESSOURCE : https://blogs.infinitesquare.com/posts/web/les-hooks-suite-et-fin-ce-que-font-les-librairies-populaires-de-react
  const connected = useSelector((state) => state.user.connected);

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {!connected ? (
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <span>Sign In</span>
        </Link>
      ) : (
        <div className="main-nav-item">
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle sign-in-icon"></i>
            {/* VERIFIER */}
            {connected.firstName}
          </Link>
          <Link className="main-nav-item" to="/">
            <i className="fa fa-sign-out sign-out-icon"></i>
            <span>Sign Out</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
