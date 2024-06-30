const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById, addProduct } = require('../controllers/product.controller.js');

router.get('/', getAllProducts);
router.get('/product/:id', getProductById);
router.post('/add', addProduct)


module.exports = router;