import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Profile from '../pages/Profile';
// import { useDispatch, useSelector } from 'react-redux';

import { newProfile } from '../_store/middlewares/userMiddleware';

export default function User() {
  useEffect(() => {
    document.title = 'Argent Bank | Update Profile';
  }, []);

  const [showForm, setShowForm] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [changeProfile, setChangeProfile] = useState(false);

  const dispatch = useDispatch();
  // const user = useSelector((state) => state.userReducer.user);
  // console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(newProfile(firstName, lastName));
    setChangeProfile(true);
  };

  return (
    <>
      {showForm ? (
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
                setShowForm(false);
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
