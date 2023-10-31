function aumentarFonte() {
    document.body.style.fontSize = (parseFloat(getComputedStyle(document.body).fontSize) * 1.2) + "px";
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: aumentarFonte
    });
});
