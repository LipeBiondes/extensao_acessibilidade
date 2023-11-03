let negritoAtivado = false;

function textoEmNegrito() {
    const elementosDeTexto = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, li, td, th');

    elementosDeTexto.forEach((elemento) => {
        if (negritoAtivado) {
            elemento.style.fontWeight = 'normal'; // Remove o negrito

        } else {
            elemento.style.fontWeight = 'bold'; // Aplica o negrito
        }
    });

    negritoAtivado = !negritoAtivado; // Inverte o estado
}

document.getElementById('texto_negrito').addEventListener('click', function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: `(${textoEmNegrito.toString()})();` }
        );
    });
});

