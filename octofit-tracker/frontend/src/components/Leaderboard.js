import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://solid-space-waddle-xxp967jr9vhpj6p-8000.app.github.dev/api/leaderboard/')
      .then(res => res.json())
      .then(data => setLeaderboard(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-header bg-success text-white">
        <h2 className="h4 mb-0">Leaderboard</h2>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(leaderboard) && leaderboard.map((entry, idx) => (
              <tr key={idx}>
                <td>{entry.user?.username || 'Unknown'}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success mt-2">Refresh</button>
      </div>
    </div>
  );
}

export default Leaderboard;
