// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import Signin from './pages/Signin';
import Signup from './pages/signup';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import Women from './category/Women';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

const Layout = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  const isAuthPage = ["/signin", "/signup"].includes(location.pathname);

  return (
    <div className="app">
      {/* Conditionally render the header based on route */}
      {!isAuthPage && <Header />}
      <main className="content">
        <Routes>
          {/* Public routes */}
          <Route path="/signin" element={<Signin setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup />} />

          {/* Private routes */}
          <Route
            path="/"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <ProductListPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/product/:id"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <ProductDetailPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <CartPage />
              </PrivateRoute>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/productcard" element={<ProductCard />} />
          <Route path="/women" element={<Women />} />

          {/* Handle undefined routes (404 page) */}
          {/* <Route path="*" element={<div>404 - Page Not Found</div>} /> */}
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage authentication state

  return (
    <Router>
      <Layout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </Router>
  );
};

export default App;
