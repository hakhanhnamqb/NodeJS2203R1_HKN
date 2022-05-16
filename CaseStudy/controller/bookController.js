const bookModel = require('../model/bookModel');
exports.addBook = async (req, res, next) => {
    console.log(req.body);
    const books = await libraryModel.findOne({ bookName: req.body.bookName });
    if (!books) {
        const bookData = {
            bookName: req.body.bookName,
            price: req.body.price,
            libraryID: req.body.libraryID,
            quantity: req.body.quantity,
            author: req.body.author
        }
        const bookNew = await libraryModel.create(bookData);
        if (bookNew){
            res.json({bookNew: bookNew});
        }
    }
}