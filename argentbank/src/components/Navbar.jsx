import logo from '../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';

import { user } from '../utils/storage';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../_store/middlewares/authMiddleware';

/**
 *
 * @returns
 */
export default function Navbar() {
  // const user = useSelector((state) => state.authReducer);

  // const isLogged = (state) => state.userReducer;
  // const isLogged = (state) => state.authReducer;
  // const user = useSelector(isLogged);

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
          <li className="main-nav-item">
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle sign-in-icon"></i>
              <span>{user}</span>
              {/* <span>{user.firstName}</span> */}
            </Link>
          </li>
          <li className="main-nav-item">
            <Link
              className="main-nav-item"
              to="/"
              onClick={handleLogout}
            >
              <i className="fa fa-sign-out sign-out-icon"></i>
              <span>Sign Out</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
