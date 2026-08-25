document.getElementsByName("nomeDiv")[0].innerHTML = "<b>nome sei la oq</b>";
document.getElementsByName("nomeDiv")[1].innerText = "bora bill";

setTimeout(() => {
    document.getElementsByName("nomeDiv")[2].innerHTML = "<p>bora bill</p>";
}, 300)