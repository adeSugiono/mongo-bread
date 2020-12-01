const mongoose = require('mongoose');


const dataSchema = new mongoose.Schema({
    id: Number,
    string: String,
    integer: Number,
    float: Number,
    date: String,
    boolean: Boolean

  });

  module.exports = mongoose.model('Data', dataSchema);