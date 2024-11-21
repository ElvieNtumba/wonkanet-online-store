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
import { CartProvider } from './components/CartContext';
// import { CartProvider } from './components/CartContext';
import { UserProvider } from './pages/uesrContext';

import './App.css';

const Layout = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  const isAuthPage = ["/signin", "/signup"].includes(location.pathname);

  return (
    <div className="app">
      {/* Conditionally render the header based on route */}
      {!isAuthPage && <Header />}
      <main className="content">
        <UserProvider>
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
        </UserProvider>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage authentication state

  return (
    <Router>
      <CartProvider> {/* Wrap your entire app with CartProvider */}
        <Layout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      </CartProvider>
    </Router>
  );
};

export default App;
