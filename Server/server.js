const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./Routes/routes');

const app = express();
app.use(bodyParser.json());
app.use('/', router);

const connectionString = "mongodb://localhost/react-cart";
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(res=> console.log("connection Done"))
.catch(err => console.log(err))


app.listen(5001 , () => {
    console.log("Running in port 5001");
})

