const formulario = document.querySelector("form");
const nombre = document.querySelector(".nombre");
const apellido = document.querySelector(".apellido");
const correo = document.querySelector(".correo");
const divErrores = document.querySelector(".errores");
const contraseña = document.querySelector(".contraseña");
const celular = document.querySelector(".celular");
formulario.addEventListener("click", e => {
  if (e.target.className == "boton") {
    let errores = [];
    if (nombre.value == "" || nombre.value == null || nombre == " ") {
      errores.push("El nombre no  puede estar vacio");
    }
    if (
      apellido.value == "" ||
      apellido.value == null ||
      apellido.value == " "
    ) {
      errores.push("El apellido no puede estar vacio");
    }
    let arroba = correo.value.indexOf("@");
    if (
      correo.value == "" ||
      correo.value == null ||
      correo.value == " " ||
      arroba == -1
    ) {
      errores.push("Ingrese un correo valido");
    }
    if (
      contraseña.value == "" ||
      contraseña.value == null ||
      contraseña.value == " " ||
      contraseña.value.lenght < 6 ||
      contraseña.value.lenght > 21
    ) {
      errores.push("La contraseña debe tener entre 6 y 20 caracteres");
    }
    if (
      isNaN(celular.value) ||
      celular.value == "" ||
      celular.value == null ||
      celular.value == " "
    ) {
      errores.push("Ingrese un numero de celular valido");
    }
    divErrores.innerHTML = errores.join("<br>");
    localStorage.setItem("usuario", nombre.value);

    if (errores.length == "0") {
      formulario.setAttribute("action", "paginaDos.html");
    } else if (errores.length > 0) {
      e.preventDefault();
    }
  }
});
