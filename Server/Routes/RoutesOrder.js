const express = require('express');
const Order = require('../models/OrderModel')
const OrderRoutes = express.Router();



// Order Api
OrderRoutes.get('/api/orders', async (req,res) => {
    const orders = await Order.find();
    res.send(orders);
});

OrderRoutes.post('/api/orders', async (req,res) => {
    const order = await new Order(req.body).save();
    res.send(order);
});

OrderRoutes.delete('/api/orders/:_id', async (req,res) => {
    const deleteOrder = Order.findByIdAndDelete(req.params.id)
    res.send(deleteOrder);
});

module.exports = OrderRoutes;