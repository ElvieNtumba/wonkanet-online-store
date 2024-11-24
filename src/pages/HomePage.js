import React from 'react';
import './homePage.css';
// import Header from '../components/Header'; 

// Import images if needed or use the public directory
import img1 from '../components/assets/img1.jpg';
import img4 from '../components/assets/img4.jpg';
import img5 from '../components/assets/img5.jpg';
import img6 from '../components/assets/img6.jpg';
import img9 from '../components/assets/img9.jpg';
import img10 from '../components/assets/img10.jpg';


const HomePage = () => {
  return (
    <div className='All'>

    <section className="homepage">
      {/* <Header /> */}
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Wonkanet Clothing Store</h1>
          <p>Discover the latest trends in fashion and accessories. Shop now for exclusive deals!</p>
          <a href="/products" className="cta-button">Shop Now</a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
          <img src={img1} alt="Product 2" />{/* Use image path or imported images */}
            <h3>Product Name 1</h3>
            <p>$29.99</p>
          </div>
          <div className="product-card">
          <img src={img4} alt="Product 2" />
            <h3>Product Name 2</h3>
            <p>$19.99</p>
          </div>
          <div className="product-card">
          <img src={img5} alt="Product 2" />
            <h3>Product Name 3</h3>
            <p>$25.99</p>
          </div>
          <div className="product-card">
          <img src={img6} alt="Product 2" />
            <h3>Product Name 4</h3>
            <p>$35.99</p>
          </div>
          <div className="product-card">
          <img src={img9} alt="Product 2" />
            <h3>Product Name 5</h3>
            <p>$45.99</p>
          </div>
          <div className="product-card">
          <img src={img10} alt="Product 2" />
            <h3>Product Name 6</h3>
            <p>$55.99</p>
          </div>
        </div>

        
      </section>

      {/* Category Links */}
      {/* <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <a href="/category/women" className="category-card">Women</a>
          <a href="/category/accessories" className="category-card">Accessories</a>
          <a href="/category/sale" className="category-card">Sale</a>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"Great quality and fast shipping!"</p>
            <h4>- Jane Doe</h4>
          </div>
          <div className="testimonial">
            <p>"Loved the designs. I'll definitely shop again."</p>
            <h4>- John Smith</h4>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <h2>Join Our Newsletter</h2>
        <p>Stay updated with the latest trends and offers. Subscribe now!</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </section>
    </div>
  );
};

export default HomePage;
