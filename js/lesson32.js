const showMessage01 = () => {
    console.log("Olá A+");
}

const showMessage02 = (username, email) => {
    const logResponse = `Olá, ${username} voce recebeu o ${email} do Bora bill`;

    console.log(logResponse);
}

const nameExample = "Gabriel Pinto";
const emailExample = "darthvader@234";

console.log(showMessage01);
console.log(showMessage02(nameExample, emailExample));