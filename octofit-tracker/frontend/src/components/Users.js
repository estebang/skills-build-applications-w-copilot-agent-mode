import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://solid-space-waddle-xxp967jr9vhpj6p-8000.app.github.dev/api/users/')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-header bg-secondary text-white">
        <h2 className="h4 mb-0">Users</h2>
      </div>
      <div className="card-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.map((user, idx) => (
              <tr key={idx}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-secondary mt-2">Add User</button>
      </div>
    </div>
  );
}

export default Users;
