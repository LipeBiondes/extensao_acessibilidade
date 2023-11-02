const fontContainer = document.getElementById('fonts-container');

fontContainer.addEventListener('click', function (event) {
  if (event.target.tagName === 'P') {
    const selectedFont = getComputedStyle(event.target).getPropertyValue('--font-family');
    document.body.style.fontFamily = selectedFont;
  }
});
