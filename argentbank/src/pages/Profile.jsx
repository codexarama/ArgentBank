import React from 'react';

import Welcome from '../components/Welcome';

import { accountData } from '../services/data';
import Account from '../components/Account';

export default function Profile() {
  const user = localStorage.getItem('USER');

  return (
      <main className="profile bg-dark">
        <Welcome fullName={user} />
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
