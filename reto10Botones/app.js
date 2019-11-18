let arreglo = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J"
];
let numeros = true;
let arregloBotonesOpromidos = [];
let contadorBoponesOprimidos = 1;
let posicionBotonOprimido;
let oprimir;
document.querySelector("#botonesOprimidos").value = " ";

let botones = (numero, letra) => {
  document.querySelector("#botonEnElQueVamos").value = " ";
  document.querySelector("#mostrarFaltantes").value = " ";
  if (contadorBoponesOprimidos > 10) {
    numeros = false;
  }
  if (numeros == true) {
    valor = numero;
  } else {
    valor = letra;
  }
  posicionBotonOprimido = arreglo.indexOf(valor);
  if (posicionBotonOprimido + 1 == contadorBoponesOprimidos) {
    imprimir(valor);
  } else {
    error();
  }
};

let imprimir = valor => {
  arregloBotonesOpromidos.push(valor);
  document.querySelector(
    "#botonesOprimidos"
  ).value = arregloBotonesOpromidos.join(" ");
  contadorBoponesOprimidos++;
};

let error = () => {
  let arregloFaltantes = [];

  if (posicionBotonOprimido + 1 > contadorBoponesOprimidos) {
    for (
      let i = contadorBoponesOprimidos - 1;
      i < posicionBotonOprimido + 1;
      i++
    ) {
      arregloFaltantes.push(arreglo[i]);
    }
    document.querySelector("#mostrarFaltantes").value = arregloFaltantes.join(
      " "
    );
  } else if (posicionBotonOprimido + 1 < contadorBoponesOprimidos) {
    oprimir = arreglo[contadorBoponesOprimidos - 1];
    document.querySelector("#botonEnElQueVamos").value = oprimir;
  }
};
