const mongoose = require('mongoose');

const addResSchema = new mongoose.Schema({
    resname: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
})




module.exports = mongoose.model('restaurant', addResSchema);