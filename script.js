const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function () {
        const texto = botao.querySelector("span");

        
        if (!texto) return;

        
        let quantidade = parseInt(texto.textContent, 10) || 0;

        if (!curtiu) {
            quantidade++;
            curtiu = true;
            botao.classList.add("curtido"); 
        } else {
            quantidade--;
            curtiu = false;
            botao.classList.remove("curtido"); 
        }

        
        texto.textContent = quantidade;
    });
});
