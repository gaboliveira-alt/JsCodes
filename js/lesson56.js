const personData = {
    namePerson: "Gabriel Pinto",
    age: 20,
    email: "gabrie@email.com"
}

let steps = 0;

for (const property in personData) {
    console.log(steps);

    console.log(property);

    console.log(personData[property]);

    steps++;
}

const arrayExample = ["Frabs", "JP", "Levi"];

for (const element in arrayExample) {
    console.log(element);

    console.log(arrayExample[element]);
}