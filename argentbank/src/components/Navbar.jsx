import React from 'react';

import logo from '../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logoutUser } from '../_store/middlewares/authMiddleware';

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
        <ul className="main-nav-item">
          <li className="main-nav-item"
          // AJOUTER onclick = edit => user profile
           >
            <i className="fa fa-user-circle sign-in-icon"></i>
            {user}
          </li>
          <li
            className="main-nav-item"
            // EMPECHER LE RECHARGEMENT DE LA PAGE : NE FONCTIONNE PAS
            onClick={(event) => {
              event.preventDefault();
              dispatch(logoutUser());
            }}
          >
            <i className="fa fa-sign-out sign-out-icon"></i>
            <span>Sign Out</span>
          </li>
        </ul>
      )}
    </nav>
  );
}
