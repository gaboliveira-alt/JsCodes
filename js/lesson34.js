const objEmpty = {};
console.log(objEmpty);
console.log(typeof objEmpty);

const userExample = {
    email: "gabriel@email.com",
    age: 18,
    name: {
        firstName: "Frabicio",
        surName: "Anjos",
    },
    address: {
        street: "Rua dos Ovos",
        numberStreet: 123,
        city: "Parnaiba",
        postalCode: 123-321,
    },
    messageUser: function() {
        console.log("Oi Frabiciooo");
    },
}

console.log(userExample.age)

console.log(userExample.name.firstName)

userExample.messageUser()

console.log(userExample["address"]["city"])
console.log(userExample["email"])