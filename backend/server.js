const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

let db, client;

async function connectToMongo() {
  try {
    console.log(uri);
    client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    db = client.db("WONKANETclothingstoreDB");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// User Sign-up
app.post('/wonkanet-app/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const usersCollection = db.collection('USERS');
    const existingUser = await usersCollection.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const result = await usersCollection.insertOne({
      username,
      email,
      password
    });

    res.status(201).json({ message: 'User registered successfully', userId: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// User Sign-in
app.post('/wonkanet-app/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const usersCollection = db.collection('USERS');
    const user = await usersCollection.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.status(200).json({ message: 'Sign in successful', userId: user._id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to sign in' });
  }
});

// Fetch all products
app.get('/api/products', async (req, res) => {
  try {
    const productsCollection = db.collection('clothing');
    const products = await productsCollection.find().toArray();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Fetch product details by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await db.collection('clothing').findOne({ _id: new ObjectId(productId) });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product details' });
  }
});

app.listen(PORT, async () => {
  await connectToMongo();
  console.log(`Server is running on http://localhost:${PORT}`);
});
