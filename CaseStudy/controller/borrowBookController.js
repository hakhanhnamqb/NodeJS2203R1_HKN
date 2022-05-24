const { now } = require('mongoose');
const bookModel = require('../model/bookModel');
const borrowBookModel = require('../model/borrowBokModel');
exports.borrowBook = async (req, res, next) => {
    // console.log(req.body);
    let books = await bookModel.findOne({ _id: req.body.bookID });
    const allBooks = await bookModel.find();
    if (books) {
        const borrowBookData = {
            nameStudent: req.body.nameStudent,
            studentID: req.body.studentID,
            bookID: req.body.bookID,
            bookName: books.bookName,
            quantity_borrow: req.body.quantity_borrow,
            borrowDate: req.body.borrowDate,
            returnDate: null,
            state: req.body.state
        }
        const borrowing = await borrowBookModel.create(borrowBookData);
        if (borrowing) {
            books.quantity_borrow += 1;
            books.quantity_remain -= 1;
            books.state = req.body.state;
            await books.save();
            // await bookModel.updateOne(books);
            const message = "Success!";
            res.render("borrowBook", { allBooks: allBooks, message : message});
            // res.json({status: 200, message: "delete success"});
        }

    } else {
        // res.json("Book " + req.body.bookName + " does not exist");
        const message = "Book " + req.body.bookName + " does not exist";
        res.render("borrowBook", { allBooks: allBooks, message : message});
    }
}
exports.returnBook = async (req, res, next) => {
    // console.log(req.body);
    const borrowed = await borrowBookModel.find({ studentID: req.body.studentID, returnDate: null });
    // console.log(borrowed);
    res.render('returnBook', { borrowed: borrowed });
}
exports.returnBookStudent = async (req, res, next) => {
    console.log(req.body);
    let borrowbooks = await borrowBookModel.findOne({ _id: req.body.id });
    let books = await bookModel.findOne({ _id: borrowbooks.bookID });
    if (borrowbooks) {
        borrowbooks.returnDate = new Date();
        await borrowbooks.save();
        if (books.quantity_borrow > 0){
            books.quantity_borrow -=1;
        }
        books.quantity_remain += 1;
        await books.save();
        res.json({status: 200, message: "return success"})
    }
}