// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Landing from './Landing';
import Dashboard from './Dashboard';

const App = () => {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    // Use navigate function instead of window.location.href
    navigate('/dashboard');
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Use the navigateToDashboard function for navigation */}
            <button onClick={navigateToDashboard}>Go to Dashboard</button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;