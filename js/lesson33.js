function execute(taskName, callBack) {
    console.log("Executando essa coisa aqui ", taskName);

    callBack()
}

function callBack() {
    console.log("Olha eu aqui");
}

execute("Executando coisas", callBack);

execute("Executando coisas", function() {
    console.log("Olha eu aqui só que diferente");
})

execute("Executando coisas", () => {
    console.log("Olha eu aqui só que arrow");
})