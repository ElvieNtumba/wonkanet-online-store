// routes.js
const express = require('express');
const router = express.Router();

// Example route
router.get('/products', (req, res) => {
  res.send('List of products');
});

module.exports = router;
