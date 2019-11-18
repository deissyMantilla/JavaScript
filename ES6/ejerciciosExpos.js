// 1 punto
// let jose = [7, 8, 9];
// let renata = [5, 9, 3];
// let pedro = [4, 8, 6];

// let promedioJose = jose.reduce((a, b) => a + b) / jose.length;
// let mejorNotaJose = Math.max(...jose);

// let promedioRenata = renata.reduce((a, b) => a + b) / renata.length;
// let mejorNotaRenata = Math.max(...renata);

// let promedioPedro = pedro.reduce((a, b) => a + b) / pedro.length;
// let mejorNotaPedro = Math.max(...pedro);

// console.log(`El promedio de Jose es: ${promedioJose} y su mejor nota es ${mejorNotaJose}
// El promedio de Renata es: ${promedioRenata} y su mejor nota es ${mejorNotaRenata}
// El promedio de Pedro es: ${promedioPedro} y su mejor nota es ${mejorNotaPedro}`);

//2 punto
//a
// function humanos(nombre, apellido, edad, genero, nacionalidad) {
//   return {
//     nombrePersona: nombre,
//     apellidoPErsona: apellido,
//     edadPersona: edad,
//     generoPersona: genero,
//     nacionalidadPersona: nacionalidad,
//     saludo: function() {
//       console.log(`Hola soy ${nombre}`);
//     }
//   };
// }
// let deissy = humanos("Deissy", "Mantilla", "24", "Mujer", "Colombiana");
// console.log(deissy);

// function Humanos(nombre, apellido, edad, genero, nacionalidad) {
//   (this.nombre = nombre), (this.apellido = apellido);
//   (this.edad = edad),
//     (this.genero = genero),
//     (this.nacionalidad = nacionalidad);
//   this.saludo = function() {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }
// let lorena = new Humanos("Lorena", "Galindo", "24", "Mujer", "colombiana");
// console.log(lorena);

//b
// function peliculas(nombre, añoLanzamiento, productor, duracion) {
//   return {
//     nombrePelicula: nombre,
//     añoLanzamientoPelicua: añoLanzamiento,
//     productorPelicula: productor,
//     duracionPelicula: duracion,
//     infoPeli: function() {
//       console.log(`La pelicula ${nombre} fue lanzada el ${añoLanzamiento}`);
//     }
//   };
// }

// let nemo = peliculas("nemo", "2008", "Disney", "2 horas");
// console.log(nemo);
// nemo.infoPeli();

// function Peliculas(nombre, añoLanzamiento, productor, duracion) {
//   (this.nombre = nombre),
//     (this.añoLanzamiento = añoLanzamiento),
//     (this.productor = productor),
//     (this.duracion = duracion);
//   this.infoPeli = function() {
//     console.log(
//       `La pelicula ${nombre} fue lanzada en el año ${añoLanzamiento}`
//     );
//   };
// }

// let cars = new Peliculas("Cars", "2011", "Disney", "2 horas y 30 minutos");
// console.log(cars);
// cars.infoPeli();

//c
// function Presidentes(nombre, iniciMandato, finMandato, edad, fueBueno, frase) {
//   (this.nombre = nombre),
//     (this.iniciMandato = iniciMandato),
//     (this.finMandato = finMandato),
//     (this.edad = edad),
//     (this.fueBueno = fueBueno),
//     (this.frase = frase),
//     (this.saludo = function() {
//       console.log(`Hola soy ${nombre} expresidente de Colombia, ${this.frase}`);
//     });
// }

// let antonioNariño = new Presidentes(
//   "Antonio Nariño",
//   1811,
//   1813,
//   "Murio a los 57 años",
//   true,
//   "De nada sirven los triunfos si la paz no los corona"
// );
// console.log(antonioNariño);
// antonioNariño.saludo();

//3
//a
// let numero = prompt("Ingrese un numero:");

// parseInt(numero) >= 0
//   ? console.log("El numero es positivo")
//   : console.log("El numero es negativo");
// b
// parseInt(numero) % 2 == 0
//   ? console.log("El numero es par")
//   : console.log("El numero es Impar");

// 4
// let usuario = {
//   nombre: "Jose",
//   apellido: "Perez",
//   correo: "jose@perez.com",
//   contraseña: "123abc"
// };
// let { nombre, apellido, correo, contraseña } = usuario;
// console.log(nombre, apellido, correo, contraseña);

//5
//a
// let a = ["azucar", "agua"];
// let b = ["pulpa", "hielo", "vaso"];
// let ingredientes = [...a, ...b];
// //console.log(ingredientes);

// //b
// function prepararJugo(a, b, c, d, e) {
//   console.log(a, b, c, d, e);
// }

// prepararJugo(...ingredientes);

//6
// function maximo(...datos) {
//   console.log(Math.max(...datos));
// }

// maximo(4, 5, 6, 7, 20);

//7
// let personas = ["Paola", "Marcela", "Pablo", "Gorge", "Antonia"];
// let asientos = ["A7", "B4", "G6", "H4", "L10"];
// let [a1, a2, a3, a4, a5] = asientos;
// let [p1, p2, p3, p4, p5] = personas;
// console.log(
//   `${p1} en ${a1}, ${p2} en ${a2}, ${p3} en ${a3}, ${p4} en ${a4}, ${p5} en ${a5}`
// );

//8
// let estudiantes = [
//   {
//     alumno: "Valentina Ortiz Camelo",
//     edad: 10,
//     curso: "5to",
//     acudientes: [
//       {
//         nombre: "Gladys Camelo",
//         telefono: 3124567893,
//         parentesco: "madre"
//       },
//       {
//         nombre: "Catalina Ortiz",
//         telefono: 3214579834,
//         parentesco: "hermana"
//       }
//     ],
//     alergias: "ninguna"
//   },

//   {
//     alumno: "Juan Jose Castro Perez",
//     edad: 9,
//     curso: "4to",
//     acudientes: [
//       { nombre: "Alberto Castro", telefono: 3245690876, parentesco: "padre" },
//       { nombre: "Valentina Ramirez", telfono: 3225643215, parentesco: "prima" }
//     ],
//     alergias: "mani"
//   },

//   {
//     alumno: "Camila Pardo Rodriguez",
//     edad: 10,
//     curso: "5to",
//     acudientes: [
//       {
//         nombre: "Maria Paula Rodriguez",
//         telefono: 3157896532,
//         parentesco: "Madre"
//       },
//       { nombre: "Carlos Pardo", telfono: 3117865409, parentesco: "padre" }
//     ],
//     alergias: "ninguna"
//   }
// ];

// let resultado = estudiantes.map(valor => {
//   return [
//     valor.alumno,
//     valor.curso,
//     valor.alergias,
//     valor.acudientes[0].nombre,
//     valor.acudientes[0].telefono
//   ];
// });
// document.write(resultado.join("<br>"));

//9
// let notaMaria = 4;
// let notaJosefina = 2;
// let notaAnastacia = 5;
// let notaTeresa = 1;

// notaMaria > 3
//   ? alert("Maria paso el examen")
//   : alert("Maria no paso el examen");
// notaJosefina > 3
//   ? alert("Josefina paso el examen")
//   : alert("Josefina no paso el examen");
// notaTeresa > 3
//   ? alert("Teresa paso el examen")
//   : alert("Teresa no paso el examen");
// notaAnastacia > 3
//   ? alert("Anastacia paso el examen")
//   : alert("Anastacia no paso el examen");

//10
// let empleado1 = [70000, 54000, 63000, 38000];
// let empleado2 = [85000, 46000, 63000, 39000];
// let empleado3 = [50000, 49000, 63000, 88000];
// let empleado4 = [90000, 55000, 91000, 38000];
// let empleado5 = [76000, 53000, 36000, 48000];

// function ventaMaxima(empleado) {
//   console.log(Math.max(empleado));
// }

// ventaMaxima(...empleado1);
// ventaMaxima(...empleado2);
// ventaMaxima(...empleado3);
// ventaMaxima(...empleado4);
// ventaMaxima(...empleado5);

// function ventaMinima(...valoresVentas) {
//   console.log(Math.min(...valoresVentas));
// }
// ventaMinima(
//   ...empleado1,
//   ...empleado2,
//   ...empleado3,
//   ...empleado4,
//   ...empleado5
// );

//11

let data = [
  {
    pais: "China",
    habitante: 1409517397
  },
  {
    pais: "Colombia",
    habitante: 48258494
  },
  {
    pais: "India",
    habitante: 1339180127
  },
  {
    pais: "USA",
    habitante: 324459463
  },
  {
    pais: "Indonesia",
    habitante: 263991379
  },
  {
    pais: "Ecuador",
    habitante: 16298217
  },
  {
    pais: "Brasil",
    habitante: 202450649
  },
  {
    pais: "Canada",
    habitante: 35362905
  },
  {
    pais: "Japon",
    habitante: 126905000
  },
  {
    pais: "Chile",
    habitante: 18261884
  },
  {
    pais: "Filipinas",
    habitante: 103456000
  },
  {
    pais: "Argentina",
    habitante: 42890368
  },
  {
    pais: "Rusia",
    habitante: 146823000
  }
];

let valoresMillones = data.map(pais => {
  let habitantes = pais.habitante;
  habitantes = Math.trunc(habitantes / 1000000) + "Millones";
  return habitantes;
});
console.log(valoresMillones.join(" "));

let paisesEspañol = data.map(objetoPais => {
  if (
    objetoPais.pais == "Argentina" ||
    objetoPais.pais == "Chile" ||
    objetoPais.pais == "Ecuador" ||
    objetoPais.pais == "Colombia"
  ) {
    return objetoPais.pais;
  }
});

console.log(paisesEspañol);
paisesEspañol.forEach(pais => {
  if (pais == undefined) {
    paisesEspañol.pop(pais);
  }
});
console.log(paisesEspañol);
