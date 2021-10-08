class Product {

    constructor(name, qty) {
        this.name = name;
        this.qty = qty;
    }

    getName() {
        console.log('Product name is :', this.name);
        return this
    }
    getQty() {
        console.log('Product price is :', this.qty)
        return this
    }
}

const productOne = new Product('Mobile', 12)
const productTwo = new Product('Laptop', 24)

productOne.getName().getQty();
productTwo.getName().getQty();