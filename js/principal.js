var pacientes = document.querySelectorAll(".paciente");
var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var tabla = document.querySelector("#tabla-pacientes");

    pacienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    alturaTd = document.createElement("td");
    pesoTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    nombreTd.textContent = nombre;
    alturaTd.textContent = peso;
    pesoTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    tabla.appendChild(pacienteTr);
});

for (let index = 0; index < pacientes.length; index++) {
    var paciente = pacientes[index];
    var pesoEsValido = true;
    var alturaEsValida = true;
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdimc = paciente.querySelector(".info-imc");

    if (peso < 0 || peso > 1000) {
        console.log("peso incorrecto");
        tdimc.textContent = "Peso Incorrecto";
        paciente.classList.add("paciente-incorrecto");
        pesoEsValido = false;
    }
    if (altura < 0 || altura > 3.0) {
        console.log("altura Oncorrecta");
        tdimc.textContent = "Altura Incorrecta";
        paciente.classList.add("paciente-incorrecto");
        pesoEsValido = false;
    }

    if (pesoEsValido && alturaEsValida) {
        var imc = peso / (altura * altura);
        tdimc.textContent = imc.toFixed(2);
    }
}
