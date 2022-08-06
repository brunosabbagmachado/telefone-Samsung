var display = document.querySelector('.display'); //puxa o display do HTML
var listaDeTeclas = document.querySelectorAll('.tecla'); //puxa todas as teclas do HTML
var listaValores = [];

for (var i = 0; i < listaDeTeclas.length; i++) { 
    listaDeTeclas[i].onclick = function () {
        display.value += this.value;
    }
}