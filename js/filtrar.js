const campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input", () => {
  const pacientesAll = document.querySelectorAll(".paciente");

  if (campoFiltro.value.length > 0) {
    for (let i = 0; i < pacientesAll.length; i++) {
      const paciente = pacientesAll[i];
      const tdNombre = paciente.querySelector(".info-nombre");
      const nombre = tdNombre.textContent;

      const expresion = new RegExp(campoFiltro.value,"i");

      if (!expresion.test(nombre)) {
        paciente.classList.add("invisible");
      } else {
        paciente.classList.remove("invisible");
      }
    }
  } else {
    for (let i = 0; i < pacientesAll.length; i++) {
      const paciente = pacientesAll[i];
      paciente.classList.remove("invisible");
    }
  }
});
