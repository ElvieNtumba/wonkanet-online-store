import React from 'react';
import './ProductCard.css';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';

// Import images dynamically
const imageMap = {
  1: require('./assets/img1.jpg'),
  2: require('./assets/img4.jpg'),
  3: require('./assets/img5.jpg'),
  4: require('./assets/img6.jpg'),
  5: require('./assets/img9.jpg'),
  6: require('./assets/img10.jpg'),
};

// Fallback image
const fallbackImage = require('./assets/images (12).jpeg');

const ProductCard = ({ product, isAuthenticated }) => {
  const { addToCart } = useCart(); // Assuming this is the cart context
  const navigate = useNavigate();
  const imageSrc = imageMap[product.id] || fallbackImage;

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/Signin'); // Corrected to the right Signin route
    } else {
      addToCart(product); // Add to cart if authenticated
    }
  };

  return (
    <div className="product-card">
      <img src={imageSrc} alt={product.name || 'Product Image'} />
      <h2>{product.name || 'Unknown Product'}</h2>
      <p>${product.price?.toFixed(2) || 'N/A'}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {/* <Link to={`/product/${product.id}`}>View Details</Link> */}
    </div>
  );
};

export default ProductCard;
