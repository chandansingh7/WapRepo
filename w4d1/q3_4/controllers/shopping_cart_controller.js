const ShoppingCart = require("../models/shopping-cart");
const Product = require("../models/product");

exports.addProduct = (req, res) => {
    let product = Product.getProduct(req.body.id);

    if (!req.session.shoppingCart) {
        req.session.shoppingCart = {}
      }

    let quantity = req.session.shoppingCart[req.body.id] && req.session.shoppingCart[req.body.id].quantity || 0;
    req.session.shoppingCart[product.id] = { ...Product.getProduct(req.body.id), quantity: (quantity) + 1};

    res.render('shopping-cart', { products: Object.values(req.session.shoppingCart)});
};

