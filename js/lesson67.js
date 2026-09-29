const objectExample = [17];
const index = 300


try {
    if (!objectExample.includes(17)) {
        throw new Error("o numero 17 não está disponivel no array");
    }

    if (index > 99) {
        throw new RangeError("O numero está fora do intervalo");
    }
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Metodo indisponivel para este objeto");
    } else if (error instanceof RangeError) {
        console.log(error.message)
    } else {
        console.log("não foi possivel realizar essa ação");
    }
}