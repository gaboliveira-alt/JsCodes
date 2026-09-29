class MyCustomError {
    constructor(message) {
        this.message = "Classe Personalizada de erro:" + message;
    }
}

try {
    throw new MyCustomError("erro bla bla")
} catch (error) {
    if (error instanceof MyCustomError) {
        console.log(error.message);
    } else {
        console.log("Não foi possivel executar isso");
    }
}