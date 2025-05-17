import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://solid-space-waddle-xxp967jr9vhpj6p-8000.app.github.dev/api/activities/')
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-white">
        <h2 className="h4 mb-0">Activities</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Type</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(activities) && activities.map((activity, idx) => (
              <tr key={idx}>
                <td>{activity.activity_type}</td>
                <td>{activity.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary mt-2">Add Activity</button>
      </div>
    </div>
  );
}

export default Activities;
