//el signo $ indica jQuery
//vanila javaScript
$(document).ready(function() {
  //esto se usa para que el codigo se ejecute cuando el DOM este cargado
  const titulo = $("#titulo"); //se usa para traer cosas del DOM
  const container = $("#container");
  const link = $("#link");
  const input = $("#input");
  const boton = $("#boton");
  container.append("<p> Soy un parrafo </p>"); // append es una convinacion entre appendChild y innerHTML
  //con append se cre un nuevo elemento, se asigna al padre y se le agrega HTML
  // prepend se usa para que el hijo que se esta creando aparezca de primeras
  link.attr("href", "https://jquery.com/").attr("target", "_blank");
  //.attr se usa para modificar atributos de etiquetas del DOM
  input.val("holis"); //se modifica el valor
  boton.click(function() {
    titulo.css("background", "green"); //con .css se modifican las propiedades css del elemento
  });
});
