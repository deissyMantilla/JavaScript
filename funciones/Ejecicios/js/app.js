//1
/* function sumar(x, y) {
  var suma = x + y;
  return suma;
}

function restar(x, y) {
  var resta = x - y;
  return resta;
}

function multiplicar(x, y) {
  var multiplicacion = x * y;
  return multiplicacion;
}

function dividir(x, y) {
  var division = x / y;
  return division;
} */

//2
var numero1 = parseInt(prompt("Ingrese el primer numero"));
var numero2 = parseInt(prompt("Ingrese el segundo numero"));
var operacion = prompt(
  "Ingrese el signo de la operacion que quiere hacer (sumar restar multiplicar dividir): "
);
var resultado;

let calculadora = (numero1, numero2, operacion) => {
  operacion(numero1, numero2);
};
calculadora(numero1, numero2, operacion);
alert("el resultado es :" + resultado);

function sumar(numero1, numero2) {
  var suma = numero1 + numero2;
  return suma;
}

function restar(numero1, numero2) {
  var resta = numero1 - numero2;
  return resta;
}

function multiplicar(numero1, numero2) {
  var multiplicacion = numero1 * numero2;
  return multiplicacion;
}
function dividir(numero1, numero2) {
  var division = numero1 / numero2;
  return division.toFixed(2);
}

//3

/* function par(numero) {
  var calculo;
  calculo = Boolean(numero % 2);
  if (calculo == true) {
    calculo = false;
  } else {
    calculo = true;
  }
  return calculo;
}

function impar(numero) {
  var calculo;
  calculo = Boolean(numero % 2);
  return calculo;
}
console.log(par(1)); // false
console.log(par(2)); // true
console.log(par(3)); // false
console.log(par(4)); // true
console.log(impar(1)); // true
console.log(impar(2)); // false
console.log(impar(3)); // true
console.log(impar(4)); // false
 */
//4
/* var numero = parseInt(prompt("Ingrese un numero:"));
var residuo;
var resultado = [];
if (isNaN(numero)) {
  document.write("Ingrese un numero valido");
} else {
  for (var i = 1; i <= numero; i++) {
    residuo = numero % i;
    if (residuo == 0) {
      resultado.push(i);
    }
  }
  if (resultado.length == 2) {
    document.write("Numero primo");
  } else {
    document.write("El numero no es primo");
  }
} */
