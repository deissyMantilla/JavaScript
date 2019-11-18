const padre = document.querySelector("#padre");
const botones = document.querySelectorAll(".boton");
/* botones.forEach(boton => {
  boton.addEventListener("click", () => {
    padre.style.background = boton.value;
  });
}); */

//se agrega un listener al padre y el escucha todos
//los eventos de los hijos
//con target se identifica que hijo tuvo el evento
padre.addEventListener("click", e => {
  if (e.target.className === "boton") {
    padre.style.background = e.target.value;
    console.log(e);
  }
});
