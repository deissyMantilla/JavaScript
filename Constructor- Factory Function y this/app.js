function crearHelado(sabor, conoOVaso) {
  return {
    cantidadSabores: 3,
    sabor: sabor
  };
}

let helado = crearHelado("fresa", "cono");
//console.log(helado);

function crearPelicula(nombre, añoLanzamiento, duracion) {
  return {
    tipo: "pelicula",
    nombrePelicula: nombre,
    fechaLanzamiento: añoLanzamiento,
    duracionPelicula: duracion
  };
}

let nemo = crearPelicula("nemo", "2010", "60minutos");
console.log(nemo);

let human = function(x, y, z, i) {
  (this.name = x),
    (this.age = y),
    (this.quote = z),
    (this.salary = function(i) {
      return i + 2500;
    });
};
let Lampd = new human("Frank Lampard", "39", "I am Frank J Lampard", 5500);
console.log(Lampd);

function humano(x, y, z, i) {
  return {
    name: x,
    age: y,
    quote: z,
    salary: function(i) {
      // console.log(i);
      let salario = parseInt(i) + 2500;
      console.log(i);
      return salario;
    }
  };
}
let zini = humano("Zenidan", "41", "I am Zidane", "7500");
//console.log(zini.salary);
