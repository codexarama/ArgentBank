import logo from '../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';

import { user } from '../utils/storage';

import { useDispatch } from 'react-redux';
import { logout } from '../_store/middlewares/authMiddleware';

/**
 *
 * @returns
 */
export default function Navbar() {
  const dispatch = useDispatch();

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
            </Link>
          </li>
          <li
            className="main-nav-item"
            // EMPECHER LE RECHARGEMENT DE LA PAGE
            // NE FONCTIONNE PAS
            onClick={(event) => {
              event.preventDefault();
              dispatch(logout(event));
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
// import logo from '../assets/argentBankLogo.png';
// import { Link } from 'react-router-dom';

// import { useDispatch } from 'react-redux';
// import { logout } from '../_store/middlewares/authMiddleware';

// // export default function Navbar(props) {
// export default function Navbar() {
//   const dispatch = useDispatch();
//   const user = localStorage.getItem('USER');

//   return (
//     <nav className="main-nav">
//       <Link className="main-nav-logo" to="/">
//         <img
//           className="main-nav-logo-image"
//           src={logo}
//           alt="Argent Bank Logo"
//         />
//         <h1 className="sr-only">Argent Bank</h1>
//       </Link>
//       {!user ? (
//         <Link className="main-nav-item" to="/login">
//           <i className="fa fa-user-circle sign-in-icon"></i>
//           <span>Sign In</span>
//         </Link>
//       ) : (
//         <ul className="main-nav-item">
//           <li className="main-nav-item">
//             <Link className="main-nav-item" to='/profile'>
//             <i className="fa fa-user-circle sign-in-icon"></i>
//             <span>{user}</span>
//             </Link>
//           </li>
//           <li
//             className="main-nav-item"
//             // EMPECHER LE RECHARGEMENT DE LA PAGE
//             // NE FONCTIONNE PAS
//             onClick={(event) => {
//               event.preventDefault();
//               dispatch(logout(event));
//             }}
//           >
//             <i className="fa fa-sign-out sign-out-icon"></i>
//             <span>Sign Out</span>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// }
