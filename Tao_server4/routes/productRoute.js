const express = require('express');
const route = express.Router();
const multer = require('multer');
const upload = multer();
const productController = require('../controller/productController');
route.post('/',upload.none(),productController.addProduct);
route.get('/add', (req,res,next)=>{res.render('product')});
route.get('/listproduct', upload.none(),productController.listProduct);

module.exports= route;