const mongoose = require('mongoose');

// Model file for product data

const productSchema = new mongoose.Schema({

  productName:{
    type:String,
    required:true,
  },
  productDesc:{
    type:String,
    required:false
  },
  productImage:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  price: {
    type: String,
    required: true
  },
  storeName: {
    type: String,
    required: true
  }
  
});

const Product = mongoose.model("product",productSchema);

module.exports = Product;