//scope: alcance o ambito
//ambito local= variables declaradas dentro de una
//funcion o ciclo solo se puede acceder desde el ciclo o funcion

var nombre = "Loris";
var saludar = () => {
  var nombre = "Deissy";
  console.log(nombre);
};
console.log(nombre);
saludar(nombre);

//let crea un ambito local
// const cre una variable de valor fijo, no se puede reasignar

//objetos literales: arreglos asociativos
let series = {
  nombre: "Maniac",
  alAire: 2019,
  visto: true,
  episodios: {
    uno: "asdf",
    dos: "asdf",
    tres: "asdff"
  },
  reproducir: () => {
    console.log("Reproduciendo...");
  }
};

console.log(series.episodios.tres);
console.log(series.reproducir());
//punk api = para hacer pruebas de las paginas
