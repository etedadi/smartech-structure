// useFetch.js
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

export default useFetch;

// Usage
import React from 'react';
import useFetch from './useFetch';

const UserList = () => {
  const { data, loading } = useFetch('/api/users');

  return (
    loading ? <div>Loading...</div> : (
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    )
  );
};

export default UserList;
