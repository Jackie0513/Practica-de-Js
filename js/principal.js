var pacientes = document.querySelectorAll(".paciente");

for (let index = 0; index < pacientes.length; index++) {
    var paciente = pacientes[index]    
    var pesoEsValido = true;
    var alturaEsValida = false;
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;
    
    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;
    
    var tdimc=paciente.querySelector(".info-imc")
    var imc = peso/(altura*altura);

    if((peso < 0) || (peso > 1000)){
        console.log("peso incorrecto");
        tdimc.textContent = "Peso Incorrecto";
        pesoEsValido = false;
    }
    if((altura < 0) || (altura > 3.00)){
        console.log("peso incorrecto");
        tdimc.textContent = "Peso Incorrecto";
        pesoEsValido = false;
    }
    tdimc.textContent = imc.toFixed(2);
    
    
}



