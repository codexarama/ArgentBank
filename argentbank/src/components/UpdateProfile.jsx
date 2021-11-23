import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { getUser, newProfile } from '../_store/middlewares/userMiddleware';

import Profile from '../pages/Profile';

/**
 *
 * @returns
 */
export default function User() {
  useEffect(() => {
    document.title = 'Argent Bank | Update Profile';
  }, []);

  const [editProfile, setEditProfile] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [changeProfile, setChangeProfile] = useState(false);

  const dispatch = useDispatch();

  const user = (state) => state.userReducer;
  const currentUser = useSelector(user);
  console.log(currentUser); // null

  useEffect(() => {
    dispatch(getUser(currentUser.token));
  }, [dispatch, currentUser.token]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName !== '') {
      dispatch(newProfile(firstName, lastName, currentUser.token));
      // setFirstName('');
      // setLastName('');
    }
    setChangeProfile(true);
  }; // erreur 401 (Unauthorized)

  return (
    <>
      {editProfile ? (
        <section className="update-profile-content">
          <i className="fa fa-user-circle update-profile-icon"></i>
          <h1>Update profile</h1>
          <form action="" onSubmit={handleSubmit} id="update-profile-form">
            <div className="input-wrapper">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                id="firstName"
                onChange={(event) => setFirstName(event.target.value)}
                value={firstName}
              />
              {changeProfile && !firstName && (
                <small className="input-error">First name is required</small>
              )}
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName">Last name</label>
              <input
                type="lastName"
                id="lastName"
                onChange={(event) => setLastName(event.target.value)}
                value={lastName}
              />
              {changeProfile && !lastName && (
                <small className="input-error">Last name is required</small>
              )}
            </div>
            <input
              className="update-profile-button"
              type="submit"
              value="Save"
            />
            <input
              className="cancel-button"
              type="button"
              value="Cancel"
              onClick={() => {
                setFirstName('');
                setLastName('');
                setEditProfile(false);
              }}
            />
          </form>
        </section>
      ) : (
        <Profile />
      )}
    </>
  );
}
// import React, { useEffect, useState } from 'react';
// // import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';

// import { newProfile } from '../_store/middlewares/userMiddleware';

// import Profile from '../pages/Profile';

// /**
//  *
//  * @returns
//  */
// export default function User() {
//   useEffect(() => {
//     document.title = 'Argent Bank | Update Profile';
//   }, []);

//   const [editProfile, setEditProfile] = useState(true);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [changeProfile, setChangeProfile] = useState(false);

//   const dispatch = useDispatch();

//   const user = useSelector((state) => state.userReducer.user);
//   console.log(user); // null

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch(newProfile(firstName, lastName));
//     setChangeProfile(true);
//   }; // erreur 401 (Unauthorized)

//   return (
//     <>
//       {editProfile ? (
//         <section className="update-profile-content">
//           <i className="fa fa-user-circle update-profile-icon"></i>
//           <h1>Update profile</h1>
//           <form action="" onSubmit={handleSubmit} id="update-profile-form">
//             <div className="input-wrapper">
//               <label htmlFor="firstName">First name</label>
//               <input
//                 type="text"
//                 id="firstName"
//                 onChange={(event) => setFirstName(event.target.value)}
//                 value={firstName}
//               />
//               {changeProfile && !firstName && (
//                 <small className="input-error">First name is required</small>
//               )}
//             </div>
//             <div className="input-wrapper">
//               <label htmlFor="lastName">Last name</label>
//               <input
//                 type="lastName"
//                 id="lastName"
//                 onChange={(event) => setLastName(event.target.value)}
//                 value={lastName}
//               />
//               {changeProfile && !lastName && (
//                 <small className="input-error">Last name is required</small>
//               )}
//             </div>
//             <input
//               className="update-profile-button"
//               type="submit"
//               value="Save"
//             />
//             <input
//               className="cancel-button"
//               type="button"
//               value="Cancel"
//               onClick={() => {
//                 setFirstName('');
//                 setLastName('');
//                 setEditProfile(false);
//               }}
//             />
//           </form>
//         </section>
//       ) : (
//         <Profile />
//       )}
//     </>
//   );
// }
