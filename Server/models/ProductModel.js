const mongoose = require('mongoose');
const ProductScheam = require('../schema/ProductSchema');


const Product = mongoose.model("product" , ProductScheam);

module.exports = Product  