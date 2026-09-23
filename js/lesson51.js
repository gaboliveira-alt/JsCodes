const myArrayExample = [
    "Texto",
    12,
    true,
    () => {
        console.log("Olha eu aqui")
    },
    {
        namePerson: "Gabriel",
        email: "gab@email.com"
    }
]

console.log(myArrayExample[0])
console.log(myArrayExample[1]);
console.log(myArrayExample[2]);

myArrayExample[3]();
console.log(myArrayExample[4].namePerson, myArrayExample[4].email);