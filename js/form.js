var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  const form = document.querySelector("#form-adicionar");
  const paciente = capturarDatosPacientes(form);
  const pacienteTr = crearTr(paciente);
  const tabla = document.querySelector("#tabla-pacientes");
  tabla.appendChild(pacienteTr);
  form.reset();
});

const capturarDatosPacientes = (form) => ({
  nombre: form.nombre.value,
  peso: form.peso.value,
  altura: form.altura.value,
  gordura: form.gordura.value,
  imc: calcularIMC(form.peso.value, form.altura.value),
});

const crearTr = (paciente) => {
  const pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(crearTd(paciente.nombre, "info-nombre"));
  pacienteTr.appendChild(crearTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(crearTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(crearTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(crearTd(paciente.imc, "info-imc"));

  return pacienteTr;
};

const crearTd = (dato, clase) => {
  const td = document.createElement("td");
  td.textContent = dato;
  td.classList.add(clase);

  return td;
};
