var pacientes = document.querySelectorAll(".paciente");

const validarPeso = (peso) =>
(peso >=0 && peso <1000) ? true : false;

const validarAltura = (altura) =>
(altura >=0 && altura <3.00) ? true : false;



for (let index = 0; index < pacientes.length; index++) {
    var paciente = pacientes[index];
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;
    
    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;
    
    var tdimc = paciente.querySelector(".info-imc");
    
    let pesoEsValido = validarPeso(peso);
    var alturaEsValida = validarAltura(altura);

    if (!pesoEsValido) {
        console.log("peso incorrecto");
        tdimc.textContent = "Peso Incorrecto";
        paciente.classList.add("paciente-incorrecto");
        pesoEsValido = false;
    }
    if (!alturaEsValida) {
        console.log("altura Oncorrecta");
        tdimc.textContent = "Altura Incorrecta";
        paciente.classList.add("paciente-incorrecto");
        pesoEsValido = false;
    }

    if (pesoEsValido && alturaEsValida) {
        tdimc.textContent = calcularIMC(peso,altura);
    }

    function calcularIMC(peso,altura){
        const imc = peso / (altura*altura);
        return imc.toFixed(2);
    }
   
}




