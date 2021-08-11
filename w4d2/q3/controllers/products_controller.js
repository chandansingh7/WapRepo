const Product = require("../models/product");

exports.getProduct = (req, res) => {
    let cartCount = 0;
    if(req.session.shoppingCart) {
        cartCount = JSON.stringify(Object.values(req.session.shoppingCart).map(ele => ele.quantity).reduce((sum, ele) => sum + ele, 0))
    }

    res.render('product', { ...Product.getProduct(req.params.id), cartCount: cartCount});
};

exports.addProduct = (req, res) => {
    res.render('add-product', res.params);
};