app.get('/api/products/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const product = await db.collection('products').findOne({ _id: new MongoClient.ObjectId(id) });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch product details' });
    }
  });
  