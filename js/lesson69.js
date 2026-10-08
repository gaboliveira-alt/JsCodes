const dataPerson = ["Gabriel Pinto", "gabriel@email.com"];

const [userName, email] = dataPerson;
console.log("Nome:", userName);
console.log("Email:", email);

const fruitsList = ["Banana", "Apple", "Orange"];

const [banana] = fruitsList;
console.log(banana);

const [_, apple] = fruitsList;
console.log(apple);

const [__, ___, orange] = fruitsList;
console.log(orange);