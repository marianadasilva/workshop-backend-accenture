var inputGanho = document.querySelector("#ganho-mes");

var inputHora = document.querySelector("#horas-dia");

var mostraResultado = document.querySelector("#resposta");

function calcularValorHora() {
    var ganho = inputGanho.valueAsNumber;
    var hora = inputHora.valueAsNumber;

    var resultado = ganho/(hora*22);
    mostraResultado.textContent = "R$" + resultado.toFixed(2);
};