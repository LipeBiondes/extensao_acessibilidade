//função para deixar o texto em negrito
function textoEmNegrito() {
    const elementosDeTexto = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, li, td, th');

    elementosDeTexto.forEach((elemento) => {
        elemento.style.fontWeight = 'bold';
    });
}

document.getElementById('texto_negrito').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: `(${textoEmNegrito.toString()})();` }
        );
    });
});


//função para voltar o texto ao normal

function textoNormal() {
    const elementosDeTexto = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, li, td, th');

    elementosDeTexto.forEach((elemento) => {
        elemento.style.fontWeight = 'normal';
    });
}

document.getElementById('texto_normal').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: `(${textoNormal.toString()})();` }
        );
    });
});

