const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ProductRouter = require('./Routes/RoutesProduct');
const OrderRouter = require('./Routes/RoutesOrder');
const runDB = require('./Config/db');


const app = express();
app.use(bodyParser.json());
app.use('/', ProductRouter);
app.use('/', OrderRouter);

// Run DB
runDB();

app.listen(5001 , () => {
    console.log("Running in port 5001");
})

