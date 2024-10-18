const mongoose = require('mongoose');

const item = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    weight: {
        type: Number,
        require: true
    },
    color: {
        type: String,
        require: true
    }
})


module.exports = mongoose.model('items', item);