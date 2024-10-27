import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://3.90.242.200:8000/wonkanet-app/signup', {
        username,
        email,
        password
      });

      if (response && response.data) {
        setMessage('');  // Clear error message if signup is successful
        alert(response.data.message);
        navigate('/');  // Navigate after showing the alert
      } else {
        setMessage('Unexpected response from the server.');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setMessage('Error: ' + error.response.data.error);
      } else {
        setMessage('Error: Failed to connect to the server.');
      }
    }
  };

  return (
    <div className='form'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="/signin">Sign In</a></p>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
