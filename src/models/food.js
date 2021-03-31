'use strict';

const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number }
});

const foodModel = mongoose.model('foods', foodSchema);
module.exports = foodModel;