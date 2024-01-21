class Product {
  constructor(id, name, price) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productId) {
    const index = this.products.findIndex(
      (product) => product.id === productId
    );
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  getTotal() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }

  checkout() {
    const total = this.getTotal();
    console.log(`Total: $${total.toFixed(2)}`);
    // Add code here to process the payment and complete the order
  }
}

const product1 = new Product(1, "Shirt", 19.99);
const product2 = new Product(2, "Pants", 29.99);
const product3 = new Product(3, "Shoes", 49.99);

const cart = new ShoppingCart();

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

console.log("Current Cart:");
cart.products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - $${product.price.toFixed(2)}`);
});
console.log("Total:", cart.getTotal());

cart.removeProduct(product2.id);

console.log("Updated Cart:");
cart.products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - $${product.price.toFixed(2)}`);
});
console.log("Total:", cart.getTotal());

cart.checkout();
