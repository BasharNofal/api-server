'use strict';

const mongoose = require('mongoose');

const clothSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String }
});

const clothModel = mongoose.model('clothes', clothSchema);
module.exports = clothModel;