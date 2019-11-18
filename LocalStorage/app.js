//LOCAL STORAGE : para guardar datos en el navegador, solo sirve para guardar strings
//Llave (key)
//Valor (value)
// acciones que se pueden hacer set(guardar), get (optener), remove(remove)
//let color = "rojo";
/* localStorage.setItem("colorFondo", color); */
/* let colorLS = localStorage.getItem("colorFondo");
console.log(colorLS);
localStorage.removeItem("colorFondo"); */

//ejemplo
/* const botonAzul = document.querySelector("#botonAzul");
 */
const botones = document.querySelectorAll(".boton");
const divPadre = document.querySelector("#padre");
function obtenerColor() {
  let colorPadre = localStorage.getItem("colorDeFondo");
  divPadre.style.background = colorPadre;
}
obtenerColor();

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    divPadre.style.background = boton.value;
    localStorage.setItem("colorDeFondo", boton.value);
  });
});

/* botonAzul.addEventListener("click", () => {
  let colorBoton = botonAzul.value;
  divPadre.style.background = colorBoton;
  localStorage.setItem("colorDeFondo", colorBoton);
});
 */
