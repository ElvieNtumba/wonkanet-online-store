import React, { useEffect, useState } from 'react';
import './SalesPage.css';

const SalesPage = () => {
  const [salesProducts, setSalesProducts] = useState([]);

  useEffect(() => {
    setSalesProducts([
      {
        id: 1,
        name: "Product 1",
        image: "/images/product1.jpg",
        oldPrice: 100,
        newPrice: 80,
      },
      {
        id: 2,
        name: "Product 2",
        image: "/images/product2.jpg",
        oldPrice: 150,
        newPrice: 120,
      },
      {
        "id": 1,
        "name": "Stylish T-Shirt",
        "image": "/images/tshirt.jpg",
        "oldPrice": 300,
        "newPrice": 200
      },
      {
        "id": 2,
        "name": "Comfortable Sneakers",
        "image": "/images/sneakers.jpg",
        "oldPrice": 1500,
        "newPrice": 1200
      },
      {
        "id": 3,
        "name": "Elegant Watch",
        "image": "/images/watch.jpg",
        "oldPrice": 2500,
        "newPrice": 2000
      },
      {
        "id": 1,
        "name": "Stylish T-Shirt",
        "image": "/images/tshirt.jpg",
        "oldPrice": 300,
        "newPrice": 200
      },
      {
        "id": 2,
        "name": "Comfortable Sneakers",
        "image": "/images/sneakers.jpg",
        "oldPrice": 1500,
        "newPrice": 1200
      },
      {
        "id": 3,
        "name": "Elegant Watch",
        "image": "/images/watch.jpg",
        "oldPrice": 2500,
        "newPrice": 2000
      }
    ]);
  }, []);
  

  return (
    <div className="sales-page">
      <h1>Sales and Promotions</h1>
      <div className="products-grid">
        {salesProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>
              <span className="old-price">R{product.oldPrice}</span> R{product.newPrice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesPage;
