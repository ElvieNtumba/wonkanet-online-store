import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../pages/uesrContext';
import './signin.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { setUser } = useUser(); // Access the context to set user info
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://54.165.105.213:8000/wonkanet-app/signin', {
        email,
        password,
      });

      if (response.status === 200) {
        const { token, user } = response.data; // Assuming the API returns user data
        localStorage.setItem('token', token);
        setUser(user); // Save user info in context
        navigate('/'); // Redirect to home page
      } else {
        setMessage(response.data.error);
      }
    } catch (error) {
      setMessage('Error: ' + (error.response ? error.response.data.error : 'Server error'));
    }
  };

  return (
    <div className='form'>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default SignIn;
