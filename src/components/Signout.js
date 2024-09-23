import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user data from localStorage or any other storage used
    localStorage.removeItem('user'); // Assuming 'user' stores your session or user data

    // Redirect to the Sign-in page or home page
    navigate('/signin'); // Redirect to the sign-in page
  }, [navigate]);

  return (
    <div>
      <h1>Signing you out...</h1>
    </div>
  );
};

export default Signout;
