const mongoose = require('mongoose');


const OrderSchema =  new mongoose.Schema( 
    {
        name: String,
        email: String,
    }, {
        timestamps: true
    });
module.exports = OrderSchema

