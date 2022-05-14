const productModel = require('../model/productModel');
exports.addProduct = async (req, res, next) => {
    console.log(req.body);
    const productData = {
        name: req.body.name,
        price: req.body.price,
        no: req.body.no
    }
    const product = await productModel.create(productData);
    if (product) {
        res.json({ product: product });
    }
}
exports.listProduct = async (req, res) => {
    try {
        const products = await productModel.find();
        console.log(products, 'products');
        res.render('listproduct', { products: products });
    } catch (err) {
        console.log(err);
    }
}