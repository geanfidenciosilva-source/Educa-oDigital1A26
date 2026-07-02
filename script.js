const botoes = document.querySelectorAll("button");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        const contador = botao.querySelector("span");

        if (contador.textContent == "0") {
            contador.textContent = "1";
        } else {
            contador.textContent = "0";
        }

    });
});