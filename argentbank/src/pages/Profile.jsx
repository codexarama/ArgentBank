import React, { useEffect, useState } from 'react';

import Welcome from '../components/Welcome';
import User from '../components/UpdateProfile';
import { accountData } from '../services/data';
import Account from '../components/Account';
// import { Redirect } from 'react-router';

export default function Profile() {
  useEffect(() => {
    document.title = 'Argent Bank | Profile';
  }, []);

  const [showForm, setShowForm] = useState(false);
  // const [changeProfile, setChangeProfile] = useState(false);

  const user = localStorage.getItem('USER');

  return (
    <main className="profile bg-dark">
      {showForm ? (
        <User />
        // <Redirect to="profile/update" />
      ) : (
        <>
          <Welcome fullName={user} />
          <input
            className="edit-button"
            type="submit"
            value="Edit Name"
            onClick={() => setShowForm(true)}
            // onClick={() => setChangeProfile(true)}
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
