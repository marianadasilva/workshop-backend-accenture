var inputValor = document.querySelector("#valor-hora");

var inputHora = document.querySelector("#horas-projeto");

var mostraResultado = document.querySelector("#resposta");

function calcular() {
    var valor = inputValor.valueAsNumber;
    var hora = inputHora.valueAsNumber;

    var resultado = valor*hora;
    mostraResultado.textContent = resultado;
};