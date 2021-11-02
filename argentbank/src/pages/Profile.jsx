import React from 'react';
import { userData } from '../services/userData';
import { profileData } from '../services/data';

import Account from '../components/Account';

import NavbarOut from '../components/NavbarOut';
import Welcome from '../components/Welcome';

export default function Profile() {
  return (
    <>
      <NavbarOut />
      <main className="profile bg-dark">
        {/* <Welcome fullName={userData.firstName + ' ' + userData.lastName}/> */}
        <Welcome fullName={userData.firstName.concat(' ', userData.lastName)} />
        <h2 className="sr-only">Accounts</h2>
        {profileData.map((item) => (
          <Account
            key={item.id}
            title={item.title}
            amount={item.amount}
            description={item.description}
          />
        ))}
      </main>
    </>
  );
}
