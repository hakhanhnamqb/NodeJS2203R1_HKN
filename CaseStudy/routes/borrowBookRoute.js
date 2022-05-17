const express = require('express');
const route = express.Router();
const multer = require('multer');
const upload = multer();
const libraryModel =  require('../model/libraryModel');
const bookModel = require('../model/bookModel');
const borrowBookController = require('../controller/borrowBookController');
route.get('/', async (req, res) => {
    const allBooks = await bookModel.find();
    console.log(allBooks);
    res.render('borrowBook',{allBooks: allBooks})
});

route.post('/borrowBooks', upload.none(),borrowBookController.borrowBook);

module.exports = route;