var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  const form = document.querySelector("#form-adicionar");
  const paciente = capturarDatosPacientes(form);
  const pacienteTr = crearTr(paciente);

  let errores = validarPaciente(paciente);

  if (errores.length > 0) {
    exhibirMensajesErr(errores);
    return;
  }
  const tabla = document.querySelector("#tabla-pacientes");
  tabla.appendChild(pacienteTr);
  document.querySelector("#mensajes-errores").innerHTML = "";

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
const validarPaciente = (paciente) => {
  const errores = [];
  if (paciente.nombre.length == 0) {
    errores.push("El nombre no puede estar vacio");
  }
  if (paciente.peso.length == 0) {
    errores.push("El peso no puede estar vacio");
  }
  if (paciente.altura.length == 0) {
    errores.push("La altura no puede estar vacia");
  }
  if (paciente.gordura.length == 0) {
    errores.push("La gordura no puede estar vacia");
  }

  if (!validarPeso(paciente.peso)) {
    errores.push("El Peso es Incorrecto");
  }
  if (!validarAltura(paciente.altura)) {
    errores.push("La Altura es Incorrecta");
  }
  return errores;
};

const exhibirMensajesErr = (errores) => {
  const ul = document.querySelector("#mensajes-errores");
  ul.innerHTML = "";

  errores.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    ul.appendChild(li);
  });
};
