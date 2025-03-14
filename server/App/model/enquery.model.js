let mongoose = require('mongoose');
let enquerySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    phone: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

let EnqueryModel = mongoose.model('Enquery', enquerySchema);
module.exports = EnqueryModel;
