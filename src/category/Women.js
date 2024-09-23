import React from 'react';
import './Women.css'; // Adjust the CSS file as needed

// Import images for the women's collection
import img1 from '../components/assets/img1.jpg'; // Update with your actual images
import img4 from '../components/assets/img4.jpg';
import img5 from '../components/assets/img5.jpg';
import img6 from '../components/assets/img6.jpg';

const products = [
  { id: 1, image: img1, name: "Women's Dress 1", price: "$49.99" },
  { id: 2, image: img4, name: "Women's Top 1", price: "$29.99" },
  { id: 3, image: img5, name: "Women's Skirt 1", price: "$39.99" },
  { id: 4, image: img6, name: "Women's Jacket 1", price: "$59.99" },
];

const Women = () => {
  return (
    <div className='women-page'>
      <h2>Women's Collection</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
