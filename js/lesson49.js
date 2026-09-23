const fruits = ["Apple", "Lemon", "Watermelon", "Stawberry", "Berries"];

const positionIndex = fruits.indexOf("Lemon");
console.log(positionIndex);

const exampleSplice = fruits.splice(1, 2);
console.log(exampleSplice);

fruits.splice(positionIndex, 1)
console.log(fruits)