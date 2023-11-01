//função para mudar o contraste
document.getElementById('mudarContraste').addEventListener('dblclick', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.filter = "invert(1)";' }
        );
    });
});