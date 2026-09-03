const creditCard = "5387549423251345";

const lastDigits = creditCard.slice(-4);
console.log(lastDigits);

const maskedNumbers = lastDigits.padStart(creditCard.length, "X");
console.log(maskedNumbers);

const numberRandom = "123";
console.log(numberRandom.padEnd(10, "Ocultoooo"));