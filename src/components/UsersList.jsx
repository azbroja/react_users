import React from 'react';

const UsersList = ({users}) => (
  users.length >= 1
  ? (
    <ol className="users">
      {users.map(user => (
        <li key={user.id} className="user">
          <span className="name">{user.name}</span>
          <span className="nick">{user.username}</span>
        </li>
      ))}
    </ol>
  ) : (
    <p>No users found.</p>
  )
);

export default UsersList;
