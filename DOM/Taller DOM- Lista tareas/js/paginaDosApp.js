const agregarTarea = document.querySelector(".agregarTarea");
const tarea = document.querySelector("#input");
const tareasPendientes = document.querySelector(".listaTareasPendientes");
const errorTarea = document.querySelector(".errorTarea");
const user = document.querySelector("#usuario");
const foto = document.querySelector("#foto");

console.log(usuario);

//let user = localStorage.getItem("usuario");
fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(usuario => {
    let nombreDeUsuario = usuario.results[0].login.username;
    console.log(nombreDeUsuario);
    user.innerHTML = `<h2>${nombreDeUsuario}</h2>`;
    let imagen = usuario.results[0].picture.large;
    foto.src = imagen;
  })
  .catch(err => console.log(err));
//usuario.innerHTML = user;

agregarTarea.addEventListener("click", e => {
  if (e.target.className == "botonAgregarTarea") {
    agregarTareas();
  }
});
tareasPendientes.addEventListener("click", e => {
  if (e.target.className == "parrafoTarea") {
    tareasPendientes.removeChild(e.target);
  }
});

agregarTarea.addEventListener("keyup", e => {
  if (e.key == "Enter") {
    agregarTareas();
  }
});

function agregarTareas() {
  if (tarea.value == "" || tarea.value == null || tarea.value == " ") {
    errorTarea.innerHTML = "La tarea no puede estar vacia";
  } else {
    let parrafo = document.createElement("p");
    tareasPendientes.appendChild(parrafo);
    let texto = tarea.value;
    parrafo.innerHTML = texto;
    parrafo.className = "parrafoTarea";
    tarea.value = "";
  }
}
