const botonCargar = document.querySelector("#cargar-pacientes");

botonCargar.addEventListener("click", () => {
  console.log("Cargando Pacientes ...");
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://alura-es-cursos.github.io/api-pacientes/pacientes.json"
  );

  xhr.addEventListener("load", () => {
    const errorAjax = document.querySelector("#error-ajax");
    if (xhr.status == 200) {
      errorAjax.classList.add("invisible");
      const respuesta = xhr.responseText;
      const pacientes = JSON.parse(respuesta);

      pacientes.forEach((paciente) => {
        adicionarPaciente(paciente);
      });
    } else {
      errorAjax.classList.remove("invisible");
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  });
  xhr.send();
});
