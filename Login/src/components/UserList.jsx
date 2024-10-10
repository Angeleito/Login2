import { useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loggedInUsers, setLoggedInUsers] = useState([]);
    const [user, setUser] = useState('');
  
    const addUser = () => {
      setUsers([...users, user]);
      setUser('');
    };
  
    const loginUser = (user) => {
      if (!loggedInUsers.includes(user)) {
        setLoggedInUsers([...loggedInUsers, user]);
      }
    };
  
    return (
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-2">User List</h2>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button onClick={addUser} className="bg-blue-500 text-white p-2 rounded">Add User</button>
        <ul className="mt-4">
          {users.map((user, index) => (
            <li key={index} className="p-2 flex justify-between items-center">
              {user}
              <button onClick={() => loginUser(user)} className="bg-green-500 text-white p-1 rounded">Login</button>
            </li>
          ))}
        </ul>
        {loggedInUsers.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Logged In Users</h2>
            <ul>
              {loggedInUsers.map((user, index) => (
                <li key={index} className="p-2">
                  {user}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default UserList;