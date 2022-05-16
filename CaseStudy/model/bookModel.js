const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bookSchema = new schema({
    bookName: String,
    price: Number,
    libraryID: {
        type: schema.Types.ObjectId,
        ref: "libraryID"
    },
    quantity: String,
    author: String
})
const Book = mongoose.model('Book',bookSchema);
module.exports = Book;