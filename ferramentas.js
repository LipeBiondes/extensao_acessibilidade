//fechar popup
document.getElementById('closseButton').addEventListener('click', function () {
    window.close();
});


//ação para aumentar a fonte
document.getElementById('aumentarFonte').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'aumentarFonte' });
    });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'aumentarFonte') {
        aumentarFonte();
    }
});



//função para aumentar a fonte  
function aumentarFonte() {
    var elementosDeTexto = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, li, td, th');

    for (var i = 0; i < elementosDeTexto.length; i++) {
        var elemento = elementosDeTexto[i];
        var estilo = window.getComputedStyle(elemento);
        var tamanhoAtual = parseFloat(estilo.fontSize);
        elemento.style.fontSize = (tamanhoAtual + 2) + 'px';
    }
}

//função para mudar o contraste
document.getElementById('mudarContraste').addEventListener('dblclick', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.filter = "invert(1)";' }
        );
    });
});