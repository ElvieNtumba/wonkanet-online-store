const Product = require('../models/Product'); // Import the product model

// Function to get product details
const getProductDetails = async (req, res) => {
  const { productId } = req.params; // Extract product ID from URL params

  try {
    const product = await Product.findById(productId); // Fetch product by ID
    if (product) {
      res.status(200).json(product); // Send product details as response
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product details', error });
  }
};

module.exports = { getProductDetails };
