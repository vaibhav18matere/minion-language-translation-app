var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverUrl = "	https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text) {
    return serverUrl + "?" + "text" + text
}

function getErrorHandler(text) {
    console.log("error occured ", error);
    alert("something wrong with server : try after some time")
}

function clickHandler() {
    var inputText = txtInput.nodeValue;

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translationText=json.contents.translated;
            outputDiv.innerText=translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler) 