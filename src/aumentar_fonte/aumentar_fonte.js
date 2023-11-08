function aumentarFonte() {
  const tamanhoFonte = 2 // Aumento desejado de tamanho da fonte
  const elementosDeTexto = document.querySelectorAll(
    'p, span, div, h1, h2, h3, h4, h5, h6, a, li, td, th'
  )

  elementosDeTexto.forEach(elemento => {
    const fontSize = window
      .getComputedStyle(elemento, null)
      .getPropertyValue('font-size')
    const tamanhoAtual = parseFloat(fontSize)
    elemento.style.fontSize = tamanhoAtual + tamanhoFonte + 'px'
  })
}

document.getElementById('aumentarFonte').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `(${aumentarFonte.toString()})();`
    })
  })
})
