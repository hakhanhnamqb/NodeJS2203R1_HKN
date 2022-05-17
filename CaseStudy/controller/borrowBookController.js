const bookModel = require('../model/bookModel');
const borrowBookModel = require('../model/borrowBokModel');
exports.borrowBook = async (req, res, next) => {
    console.log(req.body);
    const books = await bookModel.findOne({ bookName: req.body.bookName });
    if (books) {
        const borrowBookData = {
            nameStudent: req.body.nameStudent,
            studentID: req.body.studentID,
            bookID: req.body.bookID,
            quantity_borrow: req.body.quantity_borrow,
            borrowDate: req.body.borrowDate,
            returnDate: null
        }
        const borrowing = await bookModel.create(borrowBookData);
        if (borrowing) {
            res.json({ borrowing: borrowing });
        }
    } else {
        res.json("Book " + req.body.bookName + " does not exist");
    }
}