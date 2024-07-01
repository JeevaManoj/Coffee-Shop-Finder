// Importing required packages

const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Server Configuration

const app = express();
dotenv.config({ path: './.env' });
const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Function to connect to database 

async function main() {

    await mongoose.connect(process.env.MONGO_DB);
    console.log('Connected to DB');

}

// Defining the routes for stores and products

const product = require('./routes/product.route.js');
const store = require('./routes/store.route.js');

app.use('/products', product);
app.use('/stores', store);

// Test route to check whether server is running

app.get('/', (req, res) => {

    res.send('Server is running');

});

// Starting the server

app.listen(port, () => {

    console.log("Server is running on", port);
    main()

});
