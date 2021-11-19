import React, { useEffect, useState } from 'react';

import Welcome from '../components/Welcome';
import User from '../components/User';
import { accountData } from '../services/data';
import Account from '../components/Account';

export default function Profile() {
  useEffect(() => {
    document.title = "Argent Bank | Profile";
  }, []);

  const [changeProfile, setChangeProfile] = useState(false);

  const user = localStorage.getItem('USER');

  return (
    <main className="profile bg-dark">
      {changeProfile ? (<User />
      ) : (
        <>
          <Welcome fullName={user} />
          <input
            className="edit-button"
            type="submit"
            value="Edit Name"
            onClick={() => setChangeProfile(true)}
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
