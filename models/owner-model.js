const mongoose = require('mongoose');


const ownerSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength:3,
        trim:20,
    },
    email: String,
    password: String,
   products: {
        type: Array,
        default: []
    },
    gstin: String,
    picture: String,
});

module.exports = mongoose.model("Owner", ownerSchema);
    