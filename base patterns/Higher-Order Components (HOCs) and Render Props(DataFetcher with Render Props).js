// DataFetcher.js
import React, { useState, useEffect } from 'react';

const DataFetcher = ({ url, render }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  return render(data);
};

export default DataFetcher;

// Usage
import React from 'react';
import DataFetcher from './DataFetcher';

const UserList = () => (
  <DataFetcher
    url="/api/users"
    render={data => (
      data ? (
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )
    )}
  />
);

export default UserList;
