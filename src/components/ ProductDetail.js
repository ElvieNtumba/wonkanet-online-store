// src/pages/ProductDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom'; // To access the product ID

const ProductDetailPage = () => {
  const { id } = useParams(); // Get product ID from URL

  // Example: Fetch product details based on the ID or use mock data
  const product = {
    id,
    name: `Product ${id}`,
    description: `Description for Product ${id}`,
    price: (10 + parseInt(id, 10)) * 5, // Example pricing logic
    image: `img${id}.jpg`, // Assuming the image name corresponds with the ID
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={`../assets/${product.image}`} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetailPage;
