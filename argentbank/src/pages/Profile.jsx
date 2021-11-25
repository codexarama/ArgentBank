import React, { useEffect, useState } from 'react';

import Welcome from '../components/Welcome';
import UpdateProfile from '../components/UpdateProfile';
import { accountData } from '../services/data';
import Account from '../components/Account';
import { user } from '../utils/storage';

/**
 * Render the Profile component
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Profile() {
  useEffect(() => {
    document.title = 'Argent Bank | Profile';
  }, []);

  const [editProfile, setEditProfile] = useState(false);
  const HandleEditProfile = () => setEditProfile(true)

  return (
    <main className="profile bg-dark">
      {editProfile ? (
        <>
        <h2 className="update-profile-name" >{user}</h2>
        <UpdateProfile setEditProfile={setEditProfile} editProfile={editProfile}/>
      </>) : (
        <>
          <Welcome fullName={user} />
          <input
            className="edit-button"
            type="submit"
            value="Edit Name"
            onClick={HandleEditProfile}
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
