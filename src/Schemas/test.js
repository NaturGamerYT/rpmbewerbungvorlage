const { Schema, model } = require('mongoose');

let test = new Schema({
    test: String
});

module.exports = model('test', test)