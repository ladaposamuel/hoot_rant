//app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const hello = require('./routes/hello.route'); // Imports routes for the products
const app = express();

//DB connection
let dev_db_url = 'mongodb://localhost/hoot_rant';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/hello', hello);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});