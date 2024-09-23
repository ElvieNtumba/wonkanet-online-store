import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailPage.css'; // Optional: add CSS for styling

const ProductDetailPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from the server or use static data
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  // if (!product) {
  //   return <div>Loading...</div>; // Or a loading spinner
  // }

  return (
    <div className="product-detail">
      {product ? (
        <>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} className="product-image" />
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <button>Add to Cart</button>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
  
};

export default ProductDetailPage;
