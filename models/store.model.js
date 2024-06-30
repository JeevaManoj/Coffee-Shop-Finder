const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({

  storeName:{
    type:String,
    required:true,
  },
  storeDesc:{
    type:String,
    required:false
  },
  storeImage:{
    type:String,
    required:true
  },
  rating:{
    type:Number,
    required:true
  },
  storeAddress: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    required: true
  }
  
});

const Store = mongoose.model("store",storeSchema);

module.exports = Store;