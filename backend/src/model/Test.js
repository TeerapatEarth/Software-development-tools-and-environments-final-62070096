const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    title: {type: String, default: ""}
})

module.exports = mongoose.model('test', testSchema);