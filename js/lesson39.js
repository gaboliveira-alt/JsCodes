function createProduct(name) {
  const product = {};

  product.name = name;
  product.details = function () {
    console.log(`O nome do produto é ${this.name}`);
  };

  return product;
}

const product1 = new createProduct("Teclado");
console.log(product1.name);
product1.details();

const product2 = new createProduct("Mouse");
console.log(product2.name);
product2.details();

console.log(product1 === product2);

let myName = new String("Gabriel");
console.log(myName);

let price = "40.85".replace(".", "");
console.log(price);

let birthDay = new Date("2026-03-04");
console.log(birthDay);

function Person(name) {
  this.name = name;
  this.messageFunction = function () {
    console.log(`Olá meu nome é ${this.name}`);
  };
}

const person01 = new Person("Bora Bill");
console.log(person01.name);
person01.messageFunction();

const person02 = new Person("Receba");
console.log(person0.name);
person02.messageFunction();