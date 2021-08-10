module.exports = class ShoppingCart {
    static products = [];

    static addToCart(product) {
        ShoppingCart.products.push(product);
    }

    static getProducts() {
        return { products: ShoppingCart.products };
    }
}