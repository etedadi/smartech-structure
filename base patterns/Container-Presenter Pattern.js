// UserProfile.js (Presenter)
import React from 'react';

const UserProfile = ({ user }) => (
  <div>
    <h1>{user.name}</h1>
    <p>{user.email}</p>
  </div>
);

export default UserProfile;

// UserProfileContainer.js (Container)
import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';

const UserProfileContainer = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  return user ? <UserProfile user={user} /> : <div>Loading...</div>;
};

export default UserProfileContainer;
