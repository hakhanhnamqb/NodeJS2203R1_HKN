const express = require('express');
const route = express.Router();
const multer = require('multer');
const upload = multer();
const libraryModel =  require('../model/libraryModel');
const bookController = require('../controller/bookController');
route.get('/createBook', async (req, res) => {
    const libraris = await libraryModel.find();
    console.log(libraris);
    res.render('createBook',{libraris: libraris})
});

route.post('/createBook', upload.none(), bookController.addBook);

module.exports = route;