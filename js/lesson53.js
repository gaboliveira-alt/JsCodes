let execute = true;

while (execute) {
    const responseUser = window.prompt("Qual sua resposta? 1-Sim e 2-Não");

    if (responseUser == 2) {
        execute = false;
    }
}

console.log("Segue o fluxo");