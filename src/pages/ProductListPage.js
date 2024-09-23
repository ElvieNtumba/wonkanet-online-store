// src/pages/ProductListPage.js
import React, { useState } from 'react';
import Filter from '../components/Filter';
import ProductCard from '../components/ProductCard';
import './ProductListPage.css';

const ProductListPage = () => {
  // Sample product data, you can replace this with API data if needed
  const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 24.99 },
    { id: 4, name: 'Product 4', price: 34.99 },
    { id: 5, name: 'Product 5', price: 39.99 },
    { id: 6, name: 'Product 6', price: 49.99 },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  // Callback function to receive filtered results from the Filter component
  const handleFilter = (filtered) => {
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h2>Product List</h2>
      <Filter products={products} onFilter={handleFilter} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
