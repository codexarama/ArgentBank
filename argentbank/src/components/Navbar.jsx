import logo from '../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';

import { user } from '../utils/storage';

import { useDispatch } from 'react-redux';
import { logout } from '../_store/middlewares/authMiddleware';

/**
 * Render the Navbar component
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Navbar() {
  // console.log(user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
          <li>
            <Link to="/profile">
              <i className="fa fa-user-circle sign-in-icon logged-user"></i>
              <span className="logged-user">{user}</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              <i className="fa fa-sign-out sign-out-icon"></i>
              <span>Sign Out</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
