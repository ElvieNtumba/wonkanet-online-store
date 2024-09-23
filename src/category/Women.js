import React from 'react';
import './Women.css'; // Import your styles here

// Importing images from the assets folder in the components folder
import img1 from '../components/assets/img1.jpg';
import img4 from '../components/assets/img4.jpg';
import img5 from '../components/assets/img5.jpg';
import img6 from '../components/assets/img6.jpg';
import img9 from '../components/assets/img9.jpg';
import img10 from '../components/assets/img10.jpg';

const Women = () => {
  const products = [
    {
      id: 1,
      name: 'Image 1',
      image: img1, // Use the imported image
      price: '$49.99',
    },
    {
      id: 2,
      name: 'Image 4',
      image: img4,
      price: '$29.99',
    },
    {
      id: 3,
      name: 'Image 5',
      image: img5,
      price: '$39.99',
    },
    {
      id: 4,
      name: 'Image 6',
      image: img6,
      price: '$59.99',
    },
    {
      id: 5,
      name: 'Image 9',
      image: img9,
      price: '$24.99',
    },
    {
      id: 6,
      name: 'Image 10',
      image: img10,
      price: '$34.99',
    },
  ];

  return (
    <div className="women-container">
      <h1>Women’s Collection</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
