import React, { useEffect, useState } from 'react';

import Welcome from '../components/Welcome';
import User from '../components/UpdateProfile';
import { accountData } from '../services/data';
import Account from '../components/Account';
import { getValueFromSessionStorage } from '../utils/sessionStorage';
import { getValueFromLocalStorage } from '../utils/localStorage';
// import { Redirect } from 'react-router';

/**
 *
 * @returns
 */
export default function Profile() {
  useEffect(() => {
    document.title = 'Argent Bank | Profile';
  }, []);

  const [editProfile, setEditProfile] = useState(false);

  let user =
    getValueFromLocalStorage('USER') || getValueFromSessionStorage('USER');

  return (
    <main className="profile bg-dark">
      {editProfile ? (
        <User />
      ) : (
        // <Redirect to="profile/update" />
        <>
          <Welcome fullName={user} />
          <input
            className="edit-button"
            type="submit"
            value="Edit Name"
            onClick={() => setEditProfile(true)}
          />
          <h2 className="sr-only">Accounts</h2>
          {accountData.map((item) => (
            <Account
              key={item.id}
              title={item.title}
              amount={item.amount}
              description={item.description}
            />
          ))}
        </>
      )}
    </main>
  );
}
