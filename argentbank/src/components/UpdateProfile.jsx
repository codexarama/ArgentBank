import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { newProfile } from '../_store/middlewares/userMiddleware';

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

  const handleChangeFirstName = (event) => setFirstName(event.target.value);
  const handleChangeLastName = (event) => setLastName(event.target.value);
  const HandleEditProfile = () => {
    setEditProfile(false);
    setFirstName('');
    setLastName('');
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
      dispatch(newProfile(firstName, lastName));
      setEditProfile(false);
    }
    setChangeProfile(true);
  };

  // const user = (state) => state.userReducer;
  const user = (state) => state.authReducer;
  const currentUser = useSelector(user);
  console.log(currentUser); // {isAuth, token, user} for userReducer && authReducer

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
                value={firstName}
                onChange={handleChangeFirstName}
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
                value={lastName}
                onChange={handleChangeLastName}
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
              onClick={HandleEditProfile}
            />
          </form>
        </section>
      ) : (
        <Profile />
      )}
    </>
  );
}
