function font_Arial() {
  var fonte = document.getElementsByTagName('body')[0]
  fonte.style.fontFamily = 'Arial, sans-serif'
}

document.getElementById('font_Arial').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `(${font_Arial.toString()})();`
    })
  })
})

function font_Calibri() {
  var fonte = document.getElementsByTagName('body')[0]
  fonte.style.fontFamily = 'Calibri'
}

document.getElementById('font_Calibri').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `(${font_Calibri.toString()})();`
    })
  })
})

function font_CenturyGothic() {
  var fonte = document.getElementsByTagName('body')[0]
  fonte.style.fontFamily = 'Century Gothic'
}

document
  .getElementById('font_CenturyGothic')
  .addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `(${font_CenturyGothic.toString()})();`
      })
    })
  })

function font_ComicSans() {
  var fonte = document.getElementsByTagName('body')[0]
  fonte.style.fontFamily = 'Comic Sans MS, sans-serif'
}

document
  .getElementById('font_ComicSans')
  .addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `(${font_ComicSans.toString()})();`
      })
    })
  })

function font_Courier() {
  var fonte = document.getElementsByTagName('body')[0]
  fonte.style.fontFamily = 'Courier'
}

document.getElementById('font_Courier').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `(${font_Courier.toString()})();`
    })
  })
})

function font_Helvetica() {
  var fonte = document.getElementsByTagName('body')[0]
  fonte.style.fontFamily = 'Helvetica, sans-serif'
}

document
  .getElementById('font_Helvetica')
  .addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `(${font_Helvetica.toString()})();`
      })
    })
  })

function font_OpenSans() {
  var fonte = document.getElementsByTagName('body')[0]
  fonte.style.fontFamily = 'Open Sans, sans-serif'
}

document.getElementById('font_OpenSans').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `(${font_OpenSans.toString()})();`
    })
  })
})

function font_OpenDyslexic() {
  var fonte = document.getElementsByTagName('body')[0]
  fonte.style.fontFamily = 'OpenDyslexic, sans-serif'
}

document
  .getElementById('font_OpenDyslexic')
  .addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `(${font_OpenDyslexic.toString()})();`
      })
    })
  })

function font_Tahoma() {
  var fonte = document.getElementsByTagName('body')[0]
  fonte.style.fontFamily = 'Tahoma, sans-serif'
}

document.getElementById('font_Tahoma').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `(${font_Tahoma.toString()})();`
    })
  })
})

function font_Verdana() {
  var fonte = document.getElementsByTagName('body')[0]
  fonte.style.fontFamily = 'Verdana, sans-serif'
}

document.getElementById('font_Verdana').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `(${font_Verdana.toString()})();`
    })
  })
})
