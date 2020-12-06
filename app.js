var input = document.querySelector('.input');
var button = document.querySelector('.btn');
var out = document.querySelector('.output');

var serverUrl = 'https://api.funtranslations.com/translate/minion.json';

function getTranslationUrl(inp) {
    return serverUrl + "?" + "text=" + inp;
}

function errorHandler(error) {
    alert("Server Down!!! Try again Later");
}

function clickHandler(){
    var text = input.value;

    fetch(getTranslationUrl(text))
        .then(response => response.json())
        .then(json => {
            var final = json.contents.translated;
            out.innerText = final;
        })
        .catch(errorHandler)
}

button.addEventListener("click", clickHandler);