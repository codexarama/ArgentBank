import React from 'react';

import logo from '../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logoutUser } from '../_store/actions/authActions';

export default function Navbar() {
  const dispatch = useDispatch();
  const user = localStorage.getItem('USER');

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
      {!user ? (
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <span>Sign In</span>
        </Link>
      ) : (
        <div className="main-nav-item">
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle sign-in-icon"></i>
            {user}
          </Link>
          <Link
            className="main-nav-item"
            // Failed prop type: The prop `to` is marked as required in `Link`, but its value is `undefined
            // EMPECHER LE RECHARGEMENT DE LA PAGE : NE FONCTIONNE PAS
            onClick={(event) => {
              event.preventDefault();
              dispatch(logoutUser());
            }}
          >
            <i className="fa fa-sign-out sign-out-icon"></i>
            <span>Sign Out</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
