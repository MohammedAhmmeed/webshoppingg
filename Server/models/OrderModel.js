const mongoose = require('mongoose');
const OrderSchema = require('../schema/orderSchema');


const Order = mongoose.model("order" , OrderSchema);

module.exports = Order  