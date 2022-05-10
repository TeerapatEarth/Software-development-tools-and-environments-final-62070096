const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    prefix: {type: String, default: ""},
    name: {type: String, default: ""},
    personalId: {type: String, default: ""},
    birthday: {type: String, default: ""},
    address: {type: String, default: ""},
    telephone: {type: String, default: ""}
})

module.exports = mongoose.model('booking', bookingSchema);