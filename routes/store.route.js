const express = require("express");
const router = express.Router();
const { getStoreById, getAllStores, addStore } = require('../controllers/store.controller.js');

// Defining routes for store APIs

router.get('/', getAllStores);
router.get('/store/:id', getStoreById);
router.post('/add', addStore)

module.exports = router;