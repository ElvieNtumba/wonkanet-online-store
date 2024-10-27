// src/components/Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div>
      <header className="header">
        <nav>
          <Link to="#"><p>WONKANET</p></Link>
          <Link to="/"><p>Home</p></Link>
          <Link to="/products"><p>Products</p></Link>
          <Link to="/cart"><p>Cart</p></Link>
          <Link to="/signin"><p>Signin</p></Link>
          <Link to="/signup"><p>SignUp</p></Link>
          <form className="header-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form> 
        </nav>
      </header>
    </div>
  );
}

export default Header;
