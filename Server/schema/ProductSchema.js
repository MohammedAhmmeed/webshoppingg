const mongoose = require('mongoose');


const ProductScheam =  new mongoose.Schema( 
    {
        id: String,
        title: String,
        imageurl: String,
        dest: String,
        price: Number,
        sizes: [String]
    })

module.exports = ProductScheam