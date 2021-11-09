import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/argentBankLogo.png';

export default function NavbarOut({ name }) {
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
      <div className="main-nav-item">
        <Link className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle sign-in-icon"></i>
          {name}
        </Link>
        <Link className="main-nav-item" to="/">
          <i className="fa fa-sign-out sign-out-icon"></i>
          <span>Sign Out</span>
        </Link>
      </div>
    </nav>
  );
}
