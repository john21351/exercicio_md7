document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form-box');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário

        var campoA = document.getElementById('campoA').value;
        var campoB = document.getElementById('campoB').value;

        if (campoB > campoA) {
            alert('Formulário válido! Número B é maior que o número A.');
        } else {
            alert('Formulário inválido! Número B deve ser maior que o número A.');
        }
    });
});