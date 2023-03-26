import React from 'react';
import Card from './Card';

const List = ({ users }) => {
  return (
    <div className="list">
      {users.map((user) => (
        <Card key={user.name} user={user} />
      ))}
    </div>
  );
};

export default List;
