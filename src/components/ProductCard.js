import React from 'react';
// import { Link } from 'react-router-dom';
import './ProductCard.css';
import { useCart } from '../components/CartContext';


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

const ProductCard = ({ product}) => {
  const { addToCart } = useCart();
  console.log({ addToCart });
  const imageSrc = imageMap[product.id] || fallbackImage;

  // Check if onAddToCart is a function before using it
  if (typeof addToCart !== 'function') {
    console.error('onAddToCart is not a function');
  }

  return (
    <div className="product-card">
      <img src={imageSrc} alt={product.name || 'Product Image'} />
      <h2>{product.name || 'Unknown Product'}</h2>
      <p>${product.price?.toFixed(2) || 'N/A'}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      {/* <Link to={`/product/${product.id}`}>View Details</Link> */}
    </div>
  );
};


export default ProductCard;
