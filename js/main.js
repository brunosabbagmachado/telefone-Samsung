var display = document.querySelector('.display'); //puxa o display do HT
var buttonValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];
var button = [];

function tocaSom (){
    document.querySelector('#som_tecla').play();
}

document.addEventListener('DOMContentLoaded', function () {

    for (var i = 0; i < buttonValues.length; i++) {
        button[i] = document.createElement('input');
        button[i].className = 'tecla';
        button[i].type = 'button';
        button[i].value = buttonValues[i];
        button[i].onclick = function () {
            display.value += this.value;
            tocaSom();
        }
    }

    var container = document.getElementById('teclado');

    for (var i = 0; i < button.length; i++) {
        container.appendChild(button[i]);
    }

}, false);