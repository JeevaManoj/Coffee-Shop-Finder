const Product = require('../models/product.model');

module.exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

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

module.exports.addProduct = async (req, res, next) => {
    try {
      
      const { productName, productDesc, productImage, category, price } = req.body;
  
      const newProduct = new Product({
        productName,
        productDesc,
        productImage,
        category,
        price,
      });
  
      const savedProduct = await newProduct.save();
  
      res.status(201).json({ message: 'Product added successfully', product: savedProduct });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };