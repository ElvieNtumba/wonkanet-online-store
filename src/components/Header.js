// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useUser } from '../pages/uesrContext';

const Header = () => {
  const { user, setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    setUser(null); // Clear user context
  };

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link to="/">
            <p>WONKANET</p>
          </Link>
        </div>
        <div className="links">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/products">
            <p>Products</p>
          </Link>
          <Link to="/cart">
            <p>Cart</p>
          </Link>
          {user ? (
            <>
              <span>Welcome, {user.name || user.email}!</span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin">
                <p>Sign In</p>
              </Link>
              <Link to="/signup">
                <p>Sign Up</p>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;