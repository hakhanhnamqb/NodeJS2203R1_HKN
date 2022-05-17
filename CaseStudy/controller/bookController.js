const bookModel = require('../model/bookModel');
exports.addBook = async (req, res, next) => {
    console.log(req.body);
    const books = await bookModel.findOne({ bookName: req.body.bookName });
    if (!books) {
        const bookData = {
            bookName: req.body.bookName,
            price: req.body.price,
            libraryID: req.body.libraryID,
            quantity: req.body.quantity,
            quantity_borrow: 0,
            quantity_remain: req.body.quantity,
            author: req.body.author
        }
        const bookNew = await bookModel.create(bookData);
        if (bookNew) {
            res.json({ bookNew: bookNew });
        }
    } else {
        res.json("Book " + req.body.bookName + " does exist");
    }
}