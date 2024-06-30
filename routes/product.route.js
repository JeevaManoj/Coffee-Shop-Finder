const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById, addProduct, getProductsByStoreId } = require('../controllers/product.controller.js');

// Defining routes for products APIs

router.get('/', getAllProducts);
router.get('/product/:id', getProductById);
router.get('/productByStoreId/:storeId', getProductsByStoreId)
router.post('/add', addProduct)


module.exports = router;