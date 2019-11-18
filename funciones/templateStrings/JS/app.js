/* var numero = 4;

console.log(
  `Hola 
Mi numero es:
${numero + 5}`
);
// ${} se usa para poner las variables en el texto se usa esta comilla ``
 */

var usuario;
var series = [];
do {
  usuario = prompt("Nombre de serie");
  series.push(usuario);
} while (usuario != "FIN");

//Borrar el ultimo elemento
series.pop();
console.log(series);
//Borrar un elemento especifico
//indexOf
var indice = series.indexOf("got");
console.log(indice); // si no se encuentra el valor indexOf devuelve un -1
//splice
series.splice(indice, 1);
console.log(series);
//pasar a string
//join
var seriesString = series.join(" ");
console.log(seriesString);

var nuevoArreglo = seriesString.split(" ");
console.log(nuevoArreglo);

//Ordenar
var seriesOrdenadas = series.sort();
console.log(seriesOrdenadas);
