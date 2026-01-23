import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Product from "./models/Product.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://qasem:Speed-123@qasem.lsutte3.mongodb.net/productsDB?retryWrites=true&w=majority"
)
.then(() => {
  console.log("✅ MongoDB connected");
  console.log("Connected DB:", mongoose.connection.name); // <- check this
})
.catch((err) => console.error("❌ MongoDB error:", err));

// POST route: create product
app.post("/products", async (req, res) => {
  console.log("POST /products called", req.body); // debug
  try {
    const product = await Product.create(req.body);
    console.log("Product saved:", product);
    res.status(201).json(product);
  } catch (err) {
    console.error("Error creating product:", err.message);
    res.status(400).json({ error: err.message });
  }
});

// GET route: get all products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
