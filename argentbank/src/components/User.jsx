import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';

import { userData, newProfile } from '../_store/middlewares/userMiddleware';

export default function User() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [changeProfile, setChangeProfile] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(newProfile(firstName, lastName));
  };

  // const user = useSelector((state) => state.authReducer.user);
  // console.log(user);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Update profile</h1>
        <form action="" onSubmit={handleSubmit} id="sign-in-form">
          <div className="input-wrapper">
            <label htmlFor="username">Firstname</label>
            <input
              type="text"
              id="username"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">LastName</label>
            <input
              type="lastName"
              id="lastName"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
            />
          </div>
          <input
            className="sign-in-button"
            type="submit"
            value="Save"
          />
          {!changeProfile && (<input
            className="cancel-button"
            type="button"
            value="Cancel"
            onClick={() => setChangeProfile(false)}
          />)}

          {/* <input
            className="cancel-button"
            type="button"
            value="Cancel"
            onClick={() => setChangeProfile(false)}
          /> */}
        </form>
      </section>
    </main>
  );
}
