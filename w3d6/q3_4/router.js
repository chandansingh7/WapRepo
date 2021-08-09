const express = require("express");
const productController = require("./controllers/products_controller");
const shoppingcartController = require("./controllers/shopping_cart_controller");

const options = {
    "caseSensitive": false,
    "strict": false
}

const router = express.Router(options);

router.get('/:id', productController.getProduct);

router.post('/add-to-cart', shoppingcartController.addProduct);

module.exports = router;