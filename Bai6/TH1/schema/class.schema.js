const mongoose = require('mongoose')
const schema = mongoose.Schema;
const classSchema = new schema({
    name: String,
    address: String
});

module.exports = mongoose.model("Class",classSchema);