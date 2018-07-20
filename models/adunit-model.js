'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema
const adunitModel = new Schema({
    unitName: { type: String },
    unitPrice: { type: Number }
}, {
    collection: 'adunits'
});

module.exports = mongoose.model('AdUnit', adunitModel);