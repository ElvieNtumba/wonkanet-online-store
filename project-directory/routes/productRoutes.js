const express = require('express');
const { getProductDetails } = require('../controllers/productController');
const router = express.Router();

// Define the route for getting product details by ID
router.get('/product/:productId', getProductDetails);

module.exports = router;
