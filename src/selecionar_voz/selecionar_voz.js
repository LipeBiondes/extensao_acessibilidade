const voiceList = document.querySelector('#voiceList')
const synth = window.speechSynthesis
const inputTxt = document.querySelector('#texto_a_ser_lido')
const btnLer = document.querySelector('#ler-texto')
let voices = []

const botoes = [
  'font_Arial',
  'font_Calibri',
  'font_CenturyGothic',
  'font_ComicSans',
  'font_Courier',
  'font_Helvetica',
  'font_OpenSans',
  'font_OpenDyslexic',
  'font_Tahoma',
  'font_Verdana',
  'aumentarFonte',
  'mudarContraste',
  'texto_negrito',
  'texto_italico',
  'eMAG',
  'WCAG'
]

NewVoices()

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = NewVoices
}

btnLer.addEventListener('click', () => {
  let toSpeak = ''

  if (inputTxt.value === '') {
    toSpeak = new SpeechSynthesisUtterance('Por favor, digite um texto')
  } else {
    toSpeak = new SpeechSynthesisUtterance(inputTxt.value)
  }

  const selectedVoiceName =
    voiceList.selectedOptions[0].getAttribute('data-name')
  voices.forEach(voice => {
    if (voice.name === selectedVoiceName) {
      toSpeak.voice = voice
    }
  })
  synth.speak(toSpeak)
})

function speakOnClickButton(buttonId) {
  const button = document.querySelector(`#${buttonId}`)
  if (button) {
    button.addEventListener('click', () => {
      const textoAserLido = `Você selecionou ${button.textContent}`
      const toSpeak = new SpeechSynthesisUtterance(textoAserLido)
      const selectedVoiceName =
        voiceList.selectedOptions[0].getAttribute('data-name')
      voices.forEach(voice => {
        if (voice.name === selectedVoiceName) {
          toSpeak.voice = voice
        }
      })
      synth.speak(toSpeak)
    })
  }
}

function NewVoices() {
  voices = synth.getVoices()
  const selectedIndex =
    voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex
  voiceList.innerHTML = ''
  voices.forEach(voice => {
    const listItem = document.createElement('option')
    listItem.textContent = voice.name
    listItem.setAttribute('data-lang', voice.lang)
    listItem.setAttribute('data-name', voice.name)
    voiceList.appendChild(listItem)
  })

  voiceList.selectedIndex = selectedIndex
}

botoes.forEach(buttonId => {
  speakOnClickButton(buttonId)
})
