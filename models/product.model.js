const mongoose = require('mongoose');

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
    required: false
  }
  
});

const Product = mongoose.model("product",productSchema);

module.exports = Product;