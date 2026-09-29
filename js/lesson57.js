const studentExample = ["Roberta", "Gabriel", "Fabricio"];

for (const element of studentExample) {
    console.log(element);
    console.log(studentExample[element]);
}

const userObjectExample = [
    {
        nameUser: "Gabriel Pinto",
        email: "email.com"
    },
]

for (const element of userObjectExample) {
    console.log(element.email);
    console.log(element.nameUser);
}