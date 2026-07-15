const showMessage01 = () => {
    console.log("Olá A+");
}

const showMessage02 = (username, email) => {
    const logResponse = `Olá, ${username} voce recebeu o ${email} do Bora bill`;

    console.log(logResponse);
}

console.log(showMessage01);
console.log(showMessage02);