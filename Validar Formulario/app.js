const formulario = document.querySelector("form");
const boton = document.querySelector("#boton");
const errores = document.querySelector(".errores");
const nombre = document.querySelector(".nombre");
const celular = document.querySelector(".celular");
const pass = document.querySelector(".pass");
const confirmacionPass = document.querySelector(".confirmacionPass");
let mensajesErrores = [];

formulario.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.className == "boton") {
    if (nombre.value === "" || nombre.value === null || nombre.value === " ") {
      mensajesErrores.push("El nombre no puede estar vacio");
    }
    //let comprobacionNumero = parseInt(celular.value);
    if (isNaN(celular.value) || celular.value == "" || celular.value == null) {
      mensajesErrores.push("Celular debe ser un numero");
    }
    if (
      pass.value.length < 6 ||
      pass.value.length > 20 ||
      pass.value === "" ||
      pass.value === null
    ) {
      mensajesErrores.push("La contarseña debe tener entre 6 y 20 caracteres");
    }
    if (
      confirmacionPass.value !== pass.value ||
      confirmacionPass == "" ||
      confirmacionPass == null
    ) {
      mensajesErrores.push("Las contraseñas no coinciden");
    }
    if (mensajesErrores.length < 1) {
      errores.innerHTML = "registrado";
    } else {
      errores.innerHTML = mensajesErrores.join("<br>");
    }
  }
});
