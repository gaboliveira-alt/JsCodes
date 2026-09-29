const optionExample = 3;

switch (optionExample) {
    case 1:
        console.log("Cadastrado");
        break;
    case 2:
        console.log("Atualizar");
        break;
    case 3:
        console.log("Remover")
        break;
    default:
        console.log("Opção não sei");
        break;
}

for (let index = 0; index < 20; index++) {
    if (index === 5) {
        break;
    }

    console.log(index);
}