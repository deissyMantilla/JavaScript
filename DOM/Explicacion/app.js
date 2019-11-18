/* const titulo = document.getElementsByTagName("tituloPrincipal");
const titulo = document.getElementsByClassName("tituloPrincipal");
 */
/* const titulo = document.getElementById("tituloPrincipal");
 */

/* const titulo = document.querySelector('#tituloPrincipal'); */
//querySelector: busca el primer elemento que encuentre,
//se le define si es una clase(.) id(#) o etiqueta 'h1'
//lo que queremos buscar se pone dentro de '' siempre

/* const titulo = document.querySelectorAll(".tituloPrincipal");
//querySelector busca todos los elementos de la misma clase o etiqueta
console.log(titulo); */

//Crear elementos en el DOM

/* const divPadre = document.querySelector("#tituloPrincipal").parentNode;
//parentNode se usa para encontrar el nodo padre del objeto
const subtitulo = document.createElement("h2");
const contenidoSubtitulo = document.createTextNode("Soy un subtitulo");
console.log(contenidoSubtitulo);
subtitulo.appendChild(contenidoSubtitulo);
divPadre.appendChild(subtitulo); */

// modificar estilo
/* const titulo = document.querySelector("#tituloPrincipal");
titulo.innerHTML = "DOM JavaScript";
//innerHTML modifica el contenido del HTML
titulo.style.color = "red"; //se modifica el color de la letra
titulo.className = "verde"; //para crear clase
 */

//EVENTOS
const titulo = document.querySelector("#tituloPrincipal");
const boton = document.querySelector("#boton");

boton.addEventListener("click", () => {
  if (titulo.className == "verde") {
    titulo.className = "morado";
  } else {
    titulo.className = "verde";
  }
});
//toggle= para que un boton haga una cosa y despues haga lo contrario
