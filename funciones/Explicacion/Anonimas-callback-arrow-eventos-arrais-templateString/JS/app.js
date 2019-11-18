// funcion anonima: funcion sin nombre, se puede asignar a una variable

/* var nombre = function() {
  return "hola";
}; */

//CallBack: funcion que es argumento de otra funcion

/* var animales = ["camello", "vaca", "raton", "canguro"]; */

/* animales.forEach(function(animal) {
  console.log(animal);
}); */

/* 
animales.map(function(animal) {
  console.log(animal);
});
 */

/* function x(algo) {
  console.log("estoy imprimiendo algo en consola");
  y();
}

x(function() {
  document.write("estoy imprimiendo en el cuerpo de la pagina");
}); */

/* 
var sumar = (n1, n2) => n1 + n2;
var restar = (n1, n2) => n1 - n2;
var calculadora = (n1, n2, callback) => callback(n1, n2);
console.log(calculadora(5, 3, sumar));

console.log(
  calculadora(2, 3, (n1, n2) => {
    return n1 / n2;
  })
); */

//arrow function (se reorganiza la sintaxis de la funcion) => reemplaza la palabra resevada function

/* var nombre = nombrePersona => {
  console.log("Hola " + nombrePersona);
};

/* var nombre = () => {
  console.log("Hola soy Deissy");
}; */
/* nombre("Maria"); */

/* var animales = ["camello", "vaca", "raton", "canguro"];
animales.forEach(animal => {
  console.log(animal);
}); */
