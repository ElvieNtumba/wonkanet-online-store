import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

// Import images
import productImage from './assets/img1.jpg';
import productImage2 from './assets/img4.jpg';
import productImage3 from './assets/img5.jpg';
import productImage4 from './assets/img6.jpg';
import productImage5 from './assets/img9.jpg';
import productImage6 from './assets/img10.jpg';

// Map product IDs to images
const imageMap = {
  1: productImage,
  2: productImage2,
  3: productImage3,
  4: productImage4,
  5: productImage5,
  6: productImage6,
};

const ProductCard = ({ product }) => {
  const imageSrc = imageMap[product.id] || productImage; // Fallback to a default image if not found

  return (
    <div className="product-card">
      <img src={imageSrc} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
