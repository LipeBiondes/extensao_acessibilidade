//função para aumentar a fonte  
function aumentarFonte() {
    // Obtém todos os elementos de texto na página da web.
    const elementosDeTexto = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, li, td, th');

    // Aumenta o tamanho da fonte de todos os elementos de texto.
    elementosDeTexto.forEach((elemento) => {
        const estilo = getComputedStyle(elemento);
        const tamanhoAtual = parseFloat(estilo.fontSize);
        elemento.style.fontSize = tamanhoAtual + 2 + 'px';
    });
}

document.getElementById('aumentarFonte').addEventListener('click', aumentarFonte);


