import React from 'react';
import { userData } from '../services/mockedData';
import { accountData } from '../services/data';

import Account from '../components/Account';
import Welcome from '../components/Welcome';

export default function Profile() {
  return (
      <main className="profile bg-dark">
        <Welcome fullName={userData.firstName.concat(' ', userData.lastName)} />
        <h2 className="sr-only">Accounts</h2>
        {accountData.map((item) => (
          <Account
            key={item.id}
            title={item.title}
            amount={item.amount}
            description={item.description}
          />
        ))}
      </main>
  );
}
