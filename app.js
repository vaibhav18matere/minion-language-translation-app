var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

// outputDiv.innerText ="Vaibhav Matere"



function clickHandler() {
    outputDiv.innerText = "banananaa " + txtInput.value;

};

btnTranslate.addEventListener("click", clickHandler)s