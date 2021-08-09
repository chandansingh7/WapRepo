module.exports = class ShoppingCart {
    static products = [];

    static addToCart(product) {
        console.log(product)
        ShoppingCart.products.push(product);
    }

    static getProducts() {
        console.log(ShoppingCart.products)
        return { products: ShoppingCart.products };
    }
}