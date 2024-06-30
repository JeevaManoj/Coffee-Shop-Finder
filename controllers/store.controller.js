const Store = require('../models/store.model');

module.exports.getAllStores = async (req, res, next) => {
    try {
      const { minRating, name, featured } = req.query;
  
      let filter = {};
  
      if (minRating) {
        filter.rating = { $gte: minRating };
      }
  
      if (name && name !== '') {
        filter.storeName = new RegExp(name, 'i');
      }
  
      if (featured && featured !== 'false') {
    
        filter.featured = featured === 'true'; 
      } else {
        
        filter.featured = { $exists: true }; 
      }
  
      const stores = await Store.find(filter);
      res.status(200).json({ stores });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

module.exports.getStoreById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const store = await Store.findById(id);

    if (!store) {
      return res.status(404).json({ error: 'Store not found' });
    }

    res.status(200).json({ store });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' }); 
  }
};

module.exports.addStore = async (req, res, next) => {
  try {

    const { storeName, storeDesc, storeImage, rating, storeAddress, featured } = req.body;

    const newStore = new Store({
      storeName,
      storeDesc,
      storeImage,
      rating,
      storeAddress,
      featured,
    });

    const savedStore = await newStore.save();

    res.status(201).json({ message: 'Store added successfully', store: savedStore });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};