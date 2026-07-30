const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function () {
        const texto = botao.querySelector("span");

        // Verifica se existe um <span> dentro do botão antes de prosseguir
        if (!texto) return;

        // Converte o texto atual para um número inteiro de forma segura
        let quantidade = parseInt(texto.textContent, 10) || 0;

        if (!curtiu) {
            quantidade++;
            curtiu = true;
            botao.classList.add("curtido"); // Opcional: adiciona classe para mudar visual no CSS
        } else {
            quantidade--;
            curtiu = false;
            botao.classList.remove("curtido"); // Opcional: remove classe visual
        }

        // Atualiza o texto na tela
        texto.textContent = quantidade;
    });
});