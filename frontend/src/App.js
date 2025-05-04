import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    axios.get('http://localhost:3001/api/basic_endpoint')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Could not fetch data: ", error);
        setError(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
  <div className="App">
    <button onClick={fetchData} disabled={loading}>
      {loading ? 'Loading...' : 'Fetch Data from Backend'}
    </button>

    {error && (
      <div style={{ color: 'red', marginTop: '10px' }}>
        Error: {error.message}
      </div>
    )}

    {data && (
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h2>API Response:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    )}
  </div>
  );
}

 export default App;
