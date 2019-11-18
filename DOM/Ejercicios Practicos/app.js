//PRIMER PUNTO
/*
let boton = document.querySelector("#boton");
let parrafo = document.querySelector("p");
boton.addEventListener("click", () => {
  if (parrafo.className == "fuente1") {
    parrafo.className = "fuente2";
  } else {
    parrafo.className = "fuente1";
  }
});
 */

//SEGUNDO PUNTO
/* let boton = document.querySelector("#boton");
let cuerpo = document.querySelector("#cuerpo");
let color;
boton.addEventListener("click", () => {
  cuerpo.style.background = colorAleatorio();
});
var colorAleatorio = () => {
  let r = Math.random() * (255 - 1) + 1;
  let g = Math.random() * (255 - 1) + 1;
  let b = Math.random() * (255 - 1) + 1;
  let color = `rgb(${r},${g},${b})`;
  return color;
}; */

//TERCER PUNTO

/* let cajas = document.querySelectorAll(".caja");
cajas.forEach(function(caja) {
  caja.addEventListener("click", () => {
    caja.style.background = colorAleatorio();
  });
});
var colorAleatorio = () => {
  let r = Math.random() * (255 - 1) + 1;
  let g = Math.random() * (255 - 1) + 1;
  let b = Math.random() * (255 - 1) + 1;
  let color = `rgb(${r},${g},${b})`;
  return color;
}; */

//TERCER PUNTO CON DELEGACION DE EVENTOS

const padre = document.querySelector("body");
padre.addEventListener("click", event => {
  if (event.target.className == "caja") {
    event.target.style.background = colorAleatorio();
  }
});

let colorAleatorio = () => {
  let r = Math.random() * (255 - 1) + 1;
  let g = Math.random() * (255 - 1) + 1;
  let b = Math.random() * (255 - 1) + 1;
  let color = `rgb(${r},${g},${b})`;
  return color;
};
