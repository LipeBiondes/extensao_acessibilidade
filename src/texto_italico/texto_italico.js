function transformarTextoEmItalico() {
    const elementosDeTexto = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, li, td, th');

    elementosDeTexto.forEach((elemento) => {
        elemento.style.fontStyle = 'italic';
    });
}
document.getElementById('texto_italico').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: `(${transformarTextoEmItalico.toString()})();` }
        );
    });
});
