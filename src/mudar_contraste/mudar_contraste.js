//função para mudar o contraste
document.getElementById('mudarContraste').addEventListener('click', function () {

    let contraste = document.getElementById('mudarContraste').value;

    if(contraste == 0){

        document.getElementById('mudarContraste').value = 1;

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                { code: 'document.body.style.filter = "invert(1)";' }
            );
        });
    }else{

        document.getElementById('mudarContraste').value = 0;

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                { code: 'document.body.style.filter = "";' }
            );
        });
    }
});
