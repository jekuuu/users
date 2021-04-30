import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import { users } from './mockData';

const App = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    selectRandomUsers();
    setInterval(() => {
      selectRandomUsers();
    }, 5000);
  }, []);

  const selectRandomUsers = () => {
    const res = [];
    for (let i = 0; i < 4; ) {
      const random = Math.floor(Math.random() * users.length);
      if (res.indexOf(users[random]) !== -1) {
        continue;
      }
      res.push(users[random]);
      i++;
    }
    setUserData(res);
  };

  return (
    <div className='container'>
      <div className='row'>
        {userData.map((user) => (
          <UserCard data={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
