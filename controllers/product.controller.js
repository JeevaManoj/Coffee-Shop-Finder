const Product = require('../models/product.model');
const mongoose = require('mongoose');

// Get all products in the database

module.exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a particular product details using ID

module.exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all products in a particular store using store ID

module.exports.getProductsByStoreId = async (req, res, next) => {
  try {
    const { storeId } = req.params;

    const products = await Product.find({ storeName: new mongoose.Types.ObjectId(storeId) });

    if (!products.length) {
      return res.status(404).json({ error: 'No products found for this store' });
    }

    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add a product to the database

module.exports.addProduct = async (req, res, next) => {
  try {

    const { productName, productDesc, productImage, category, price, storeName } = req.body;

    const newProduct = new Product({
      productName,
      productDesc,
      productImage,
      category,
      price,
      storeName
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({ message: 'Product added successfully', product: savedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};