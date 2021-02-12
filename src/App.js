import React, {useState, useEffect} from 'react';
import UsersList from './components/UsersList';
import './App.css';

function App() {
  const [users, setUsers] = useState(null);
  const [search, setSearch] = useState('');

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    setUsers(users);
  }

  useEffect(() => fetchUsers(), []);

  return (
    <div className="App">
      <h1>Users List</h1>
      <input
        type="text"
        placeholder="Search by user name..."
        className="search"
        onChange={event => setSearch(event.target.value)}
      />
      {users !== null && <UsersList users={users.filter(
        user => search === '' || user.name.toLowerCase().includes(search.toLowerCase())
      )} />}
    </div>
  );
}

export default App;
