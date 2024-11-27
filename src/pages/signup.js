import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://54.165.105.213:8000/wonkanet-app/signup', formData);

      if (response && response.data) {
        setMessage('');
        alert(response.data.message);
        navigate('/');
      } else {
        setMessage('Unexpected response from the server.');
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || 'Error: Failed to connect to the server.';
      setMessage(errorMessage);
    }
  };

  return (
    <div className="signup-form">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      </form>
      {message && <p className="error-message">{message}</p>}
    </div>
  );
};

export default Signup;
