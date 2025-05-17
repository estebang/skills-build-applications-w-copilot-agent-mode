import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://solid-space-waddle-xxp967jr9vhpj6p-8000.app.github.dev/api/teams/')
      .then(res => res.json())
      .then(data => setTeams(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-header bg-info text-white">
        <h2 className="h4 mb-0">Teams</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(teams) && teams.map((team, idx) => (
              <tr key={idx}>
                <td>{team.name}</td>
                <td>{team.members?.length || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-info mt-2 text-white">Create Team</button>
      </div>
    </div>
  );
}

export default Teams;
