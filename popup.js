let close = document.getElementById("closseButton");

close.addEventListener("click", function () {
    window.close();
});


function aumentarFonte() {
    // Aumentar o tamanho da fonte para 1.2 vezes o tamanho atual
    const elemento = document.querySelector("p");
    const tamanhoAtual = getComputedStyle(elemento).fontSize;
    const novoTamanho = (parseFloat(tamanhoAtual) * 1.2) + "px";
    elemento.style.fontSize = novoTamanho;
}

// Adicionar um ouvinte de evento para o botão
document.getElementById("aumentarFonte").addEventListener("click", aumentarFonte);