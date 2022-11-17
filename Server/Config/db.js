const mongoose = require('mongoose')


const connectionString = "mongodb://localhost/react-cart";
function runDB() {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(res=> console.log("connection Done"))
    .catch(err => console.log(err))
}

module.exports = runDB;