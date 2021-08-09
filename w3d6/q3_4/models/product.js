module.exports = class Product {
    static products = [new Product(1, "Mouse", "For macBook", 12.99), new Product(2, "usb-dongle", "For windows", 5.99)];

    constructor(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    save() {
        Product.products.push(this);
    }

    static getProduct(id) {
        return Product.products.find((pro) => pro.id == id);

    }

    static getAll() {
        return Product.products;
    }
}