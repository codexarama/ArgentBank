import React from 'react';

export default function Welcome({fullName}) {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {fullName}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}
