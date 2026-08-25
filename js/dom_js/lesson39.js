document.querySelector("#idQualquerQuatro").innerHTML = "<b>quero query selector</b>";
document.querySelector("p").innerHTML = "Conteudo do p";
document.querySelector(".classeQualquerNove").innerHTML = "texto comum...";

document.querySelectorAll(".classeQualquerNove")[0].innerHTML = "texto comjum 2";
document.querySelectorAll('#idQualquer')[2].innerHTML = '<b>QuerySelectorAll...</b>';
document.querySelectorAll('.classeQualquer')[0].innerText = "QuerySelector com classe";
document.querySelectorAll('div')[1].innerHTML = "Última query";