import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './BiasResult.css';

export function BiasResult({ user_id }) {
  const [results, setResults] = useState(null);

  useEffect(() => {
    async function fetchResults() {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/bias_test/api/get-bias-results/${user_id}/`,
          {
            method: 'GET',
          }
        )
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching bias results:', error);
      }
    }

    fetchResults();
  }, [user_id]);

  if (!results) {
    return <div>Loading...</div>;
  }

  return (
    <div className='BiasResults'>
      <div className='title-bar'>
        <h1>Bias Test Results</h1>
      </div>
      <br></br>
      <div>
        <table>
          <thead>
            <tr>
              <th>Bias Type</th>
              <th>Possibility</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(results).map(([bias, possibility], index) => (
              <tr key={index}>
                <td>{bias}</td>
                <td>{possibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br></br>
      <div>
        <h6>You have finished the bias test.</h6>
        <div className='result-message'>
          <h6>
            You can review the result in <Link to='/'>My Home</Link>.
          </h6>
        </div>
      </div>
    </div>
  )
}


