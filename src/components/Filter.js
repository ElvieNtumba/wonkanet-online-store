// src/components/Filter.js
import React, { useState } from 'react';

const Filter = ({ products, onFilter }) => {
  const [query, setQuery] = useState('');

  const handleFilterChange = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery)
    );
    onFilter(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
