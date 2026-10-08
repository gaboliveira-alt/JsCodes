const product = {
  description: "",
  price: 0,
};

const { description, price } = product;
console.log(description);
console.log(price);

function newProduct({description, price}) {
    console.log("NOVO PRODUTO");
    console.log(description);
    console.log(price);
}

newProduct({
    description: "Teclado",
    price: 180
});