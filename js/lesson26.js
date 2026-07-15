let result = 1;

try {
    if (result == 1) {
        throw new Error("o valor é diferente de zero");
    }
}
catch (error) {
    console.log(error);
}
finally {
    console.log("Fim papi");
}