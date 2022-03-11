const tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", (event) => {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);
});

// pacientes.forEach(paciente => {
//     paciente.addEventListener('dblclick',function(){
//         console.log('Se hizo doble click');
//         this.remove();
//     })

// });
