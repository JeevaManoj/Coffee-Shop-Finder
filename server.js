const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config({ path: './.env' });
const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function main() {

    await mongoose.connect(process.env.MONGO_DB);
    console.log('Connected to DB');

}

const product = require('./routes/product.route.js');
const store = require('./routes/store.route.js');

app.use('/products', product);
app.use('/stores', store);

app.get('/',() => {
    res.json({"msg": "Hello World"})
})

app.listen(port, () => {

    console.log("Server is running on", port);
    main()

});
