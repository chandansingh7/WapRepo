const Product = require("../models/product");

exports.addProduct = (req, res) => {
    let product = Product.getProduct(req.body.productId);

    if (!req.session.shoppingCart) {
        req.session.shoppingCart = {}
      }

    let quantity = req.session.shoppingCart[req.body.productId] && req.session.shoppingCart[req.body.productId].quantity || 0;
    req.session.shoppingCart[product.id] = { ...Product.getProduct(req.body.productId), quantity: (quantity) + 1};

    res.end(JSON.stringify(Object.values(req.session.shoppingCart).map(ele => ele.quantity).reduce((sum, ele) => sum + ele, 0)));
};

exports.getCart = (req, res) => {
  res.end(JSON.stringify(Object.values(req.session.shoppingCart).map(ele => ele.quantity).reduce((sum, ele) => sum + ele, 0)));
};

