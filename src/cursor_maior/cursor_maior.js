function substituirCursor() {
  const cursorURL = chrome.extension.getURL('/assets/cursor.svg'); // Substitua 'seu_cursor.svg' pelo caminho do seu arquivo SVG
  const elementosDeTexto = document.querySelectorAll('body, p, span, div, h1, h2, h3, h4, h5, h6, a, li, td, th');

  elementosDeTexto.forEach((elemento) => {
    elemento.style.cursor = `url('${cursorURL}'), auto`;
  });
  // Aplica o cursor personalizado em todos os elementos de texto
}

document.getElementById('cursor_maior').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: `(${substituirCursor.toString()})();` }
    );
  });
});
