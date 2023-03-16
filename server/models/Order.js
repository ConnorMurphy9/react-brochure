const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String
    },
    description: {
        type: String,
    }

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;