import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [apiData, setApiData] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  //Using 5100 because 5000 conflicts with another app
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5100';

  useEffect(() => {
    // Fetch API info
    fetch(`${API_URL}/`)
      .then(res => res.json())
      .then(data => setApiData(data))
      .catch(err => console.error(err));

    // Fetch users
    fetch(`${API_URL}/api/users`)
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [API_URL]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 CI/CD Playground</h1>

        {apiData && (
          <div className="api-info">
            <p><strong>Version:</strong> {apiData.version}</p>
            <p><strong>Environment:</strong> {apiData.environment}</p>
            <p><strong>Status:</strong> {apiData.status}</p>
          </div>
        )}

        <div className="users-section">
          <h2>Users</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;