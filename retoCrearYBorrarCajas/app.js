const padre = document.querySelector(".padre");
const botones = document.querySelector(".botones");
let numeroCajas = 0;
botones.addEventListener("click", e => {
  if (e.target.className == "boton") {
    if (e.target.id == "crear") {
      const caja = document.createElement("div");
      caja.className = "caja";
      padre.appendChild(caja);
      numeroCajas++;
      caja.innerHTML = numeroCajas;
      caja.id = numeroCajas;
    } else if (e.target.id == "borrar") {
      const cajaEliminar = document.getElementById(numeroCajas);
      padre.removeChild(cajaEliminar);
      numeroCajas--;
    }
  }
});
