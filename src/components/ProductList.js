// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard'; 
import ',/ProductCard.css'

const ProductList = () => {
  // Use hardcoded product data with IDs that match your imageMap
  const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 24.99 },
    { id: 4, name: 'Product 4', price: 34.99 },
    { id: 5, name: 'Product 5', price: 39.99 },
    { id: 6, name: 'Product 6', price: 49.99 },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard  />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
