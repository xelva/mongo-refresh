const mongoose = require('mongoose');

const Product = require('./models/products');

mongoose.connect('mongodb+srv://xelva:test123@cluster0.aqijx.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('we\'re connected!')
    }).catch(() => {
        console.log('ummm...didn\'t manage to connect')
    })


const createProduct = async (req, res, next) => {
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });

    const result = await createdProduct.save();

    res.json({ result })
};

const getProducts = async (req, res, next) => {
    const products = await Product.find().exec();
    res.json(products)
}

exports.createProduct = createProduct; 
exports.getProducts = getProducts;