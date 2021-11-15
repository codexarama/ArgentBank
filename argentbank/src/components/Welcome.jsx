import React, { useState } from 'react';
import User from './User';

export default function Welcome({ fullName }) {
  const [changeProfile, setChangeProfile] = useState(false);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {fullName}!
      </h1>
      {changeProfile ? (
      <User />
    ) : (
      <input
        className="edit-button"
        type="submit"
        value="Edit Name"
        onClick={() => setChangeProfile(true)}
      />
    )}
    </div>
  );
}
