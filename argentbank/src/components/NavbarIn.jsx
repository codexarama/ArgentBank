import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/argentBankLogo.png';

export default function NavbarIn() {
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
      <Link className="main-nav-item" to="/login">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <span>Sign In</span>
      </Link>
    </nav>
  );
}
