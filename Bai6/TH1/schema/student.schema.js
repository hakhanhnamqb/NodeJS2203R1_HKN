const mongoose = require('mongoose')
const schema = mongoose.Schema;
const studentSchema = new schema({
    name: String,
    age: Number,
    class: {type: schema.Types.ObjectId,
        ref: "class"
    }
});

module.exports = mongoose.model("Student",studentSchema);