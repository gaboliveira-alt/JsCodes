let elementExample = document.createElement("li");
let textForElement = document.createTextNode("Texto aqui receba porra");
elementExample.appendChild(textForElement);

let listExample = document.getElementsByTagName("ul")[0];
listExample.appendChild(elementExample);

let listExample01 = document.getElementsByTagName("ul")[0];
let itens = lista.getElementsByTagName("li");

let elementExample01 = document.createElement("li");
elementExample01.textContent = "outro item";

listExample.insertBefore(elementExample01, itens[0]);