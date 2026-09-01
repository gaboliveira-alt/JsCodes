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
        geoLocation: {
            latitude: "4352525",
            longitude: "5434252",
        }
    },
    messageUser: function() {
        console.log("Oi Frabiciooo");
    },
}

console.log(userExample?.address?.street)