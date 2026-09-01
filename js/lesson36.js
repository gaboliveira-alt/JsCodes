const productExample = {
    nameProduct: "Fribas",
    quantity: 30,
}

console.log(productExample.quantity);
productExample.quantity = 50;
console.log(productExample.quantity);

productExample["quantity"] = 100;
console.log(productExample["quantity"]);