let numeros = true;
let numerosEspichados = [];
let numeroBotonesEspichados = 1;
let valor;
let posicion;
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

let botones = callBack => {
  if (numeroBotonesEspichados > 10) {
    numeros = false;
  }
  callBack();
};
let mostrarMensaje1 = () => {
  if (numeros == true) {
    valor = 1;
    if (numeroBotonesEspichados == 1) {
      imprimir(valor);
    } else {
      error();
    }
  } else {
    valor = "A";
    if (numeroBotonesEspichados == 11) {
      imprimir(valor);
    } else {
      error();
    }
  }
};
let mostrarMensaje2 = () => {
  if (numeros == true) {
    valor = 2;
    if (numeroBotonesEspichados == 2) {
      imprimir(valor);
    } else {
      error();
    }
  } else {
    valor = "B";
    if (numeroBotonesEspichados == 12) {
      imprimir(valor);
    } else {
      error();
    }
  }
};
let mostrarMensaje3 = () => {
  if (numeros == true) {
    valor = 3;
    if (numeroBotonesEspichados == 3) {
      imprimir(valor);
    } else {
      error();
    }
  } else {
    valor = "C";
    if (numeroBotonesEspichados == 13) {
      imprimir(valor);
    } else {
      error();
    }
  }
};

let mostrarMensaje4 = () => {
  if (numeros == true) {
    valor = 4;
    if (numeroBotonesEspichados == 4) {
      imprimir(valor);
    } else {
      error();
    }
  } else {
    valor = "D";
    if (numeroBotonesEspichados == 14) {
      imprimir(valor);
    } else {
      error();
    }
  }
};

let mostrarMensaje5 = () => {
  if (numeros == true) {
    valor = 5;
    if (numeroBotonesEspichados == 5) {
      imprimir(valor);
    } else {
      error();
    }
  } else {
    valor = "E";
    if (numeroBotonesEspichados == 15) {
      imprimir(valor);
    } else {
      error();
    }
  }
};

let mostrarMensaje6 = () => {
  if (numeros == true) {
    valor = 6;
    if (numeroBotonesEspichados == 6) {
      imprimir(valor);
    } else {
      error();
    }
  } else {
    valor = "F";
    if (numeroBotonesEspichados == 16) {
      imprimir(valor);
    } else {
      error();
    }
  }
};
let mostrarMensaje7 = () => {
  if (numeros == true) {
    valor = 7;
    if (numeroBotonesEspichados == 7) {
      imprimir(valor);
    } else {
      error();
    }
  } else {
    valor = "G";
    if (numeroBotonesEspichados == 17) {
      imprimir(valor);
    } else {
      error();
    }
  }
};

let mostrarMensaje8 = () => {
  if (numeros == true) {
    valor = 8;
    if (numeroBotonesEspichados == 8) {
      imprimir(valor);
    } else {
      error();
    }
  } else {
    valor = "H";
    if (numeroBotonesEspichados == 18) {
      imprimir(valor);
    } else {
      error();
    }
  }
};

let mostrarMensaje9 = () => {
  if (numeros == true) {
    valor = 9;
    if (numeroBotonesEspichados == 9) {
      imprimir(valor);
    } else {
      error();
    }
  } else {
    valor = "I";
    if (numeroBotonesEspichados == 19) {
      imprimir(valor);
    } else {
      error();
    }
  }
};

let mostrarMensaje10 = () => {
  if (numeros == true) {
    valor = 10;
    if (numeroBotonesEspichados == 10) {
      imprimir(valor);
    } else {
      error();
    }
  } else {
    valor = "J";
    if (numeroBotonesEspichados == 20) {
      imprimir(valor);
    } else {
      error();
    }
  }
};

let imprimir = valor => {
  numerosEspichados.push(valor);
  alert(numerosEspichados.join(" "));
  numeroBotonesEspichados++;
};

let error = () => {
  posicion = arreglo.indexOf(valor);
  if (posicion > numeroBotonesEspichados) {
    let i = numeroBotonesEspichados - 1;
    let arregloError = [];
    while (i < posicion) {
      arregloError.push(arreglo[i]);
      i++;
    }
    alert("Faltan " + arregloError.join(" "));
  } else {
    alert("Oprima el: " + numeroBotonesEspichados);
  }
};
