import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';
import octofitLogo from '../octofitapp-small.png';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img src={octofitLogo} alt="OctoFit Logo" className="octofit-logo" />
            OctoFit Tracker
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><NavLink className="nav-link" to="/activities">Activities</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/teams">Teams</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/users">Users</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/workouts">Workouts</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<div className="text-center mt-5"><h1 className="display-4">Welcome to OctoFit Tracker</h1><p className="lead">Track your fitness, join teams, and compete on the leaderboard!</p></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
