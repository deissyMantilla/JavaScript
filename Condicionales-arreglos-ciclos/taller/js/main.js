//1

/* var nota = parseInt(prompt("Igrese una nota:"));
if (nota <4) {
  document.write("Muy deficiente");
} else if (nota >= 4 && nota <6) {
  document.write("Insuficiente");
} else if (nota >= 6 && nota <8) {
  document.write("Bien");
} else if (nota >= 8 && nota <10) {
  document.write("Muy bien");
} else if (nota == 10) {
  document.write("Excelente");
} else {
  document.write("Ingrese una nota valida");
} */

//2

/* var numero = parseInt(prompt("ingresa un numero"));
if (numero <= 0) {
  document.write("el numero es negativo");
} else if (numero >= 0) {
  document.write("el numero es positivo");
} else {
  document.write("ingrese un numero valido");
} */

//3

/* var numero = prompt("ingresa un numero");
if (numero.length == 2) {
  document.write("Tiene dos cifras");
} else {
  document.write("Distinto de dos cifras");
} */

//4
/* 
var datosIngresados = [];

do {
  datosIngresados.push(prompt("Ingrese un valor"));
} while (confirm("Desea continuar?:"));

var i = 0;
while (i < datosIngresados.length) {
  document.write(datosIngresados[i] + " ");
  i++;
}
 */

//Taller 2
//1

/* var valor1 = parseInt(prompt("Ingrese un valor"));
var valor2 = parseInt(prompt("Ingrese un valor"));

if (valor1 > valor2) {
  document.write(" el primer dato es mayor que el segundo");
} else if (valor1 < valor2) {
  document.write("el primer valor es menor que el segundo valor");
} else if (valor1 == valor2) {
  document.write("Los valores ingresados son iguales");
} else {
  document.write("Ingrese valores validos");
} */

//2

/* var numero;
var i = 0;
var suma = 0;
var promedio;
do {
  numero = parseInt(prompt("Ingresa un numero"));
  suma += numero;
  i++;
} while (numero >= 0);
promedio = suma / i;
document.write("la suma de los datos ingresados es: " + suma + "<br>");
document.write("el promedio de los datos ingresados es: " + promedio);
 */
//3
/* var dato1 = parseInt(prompt("Ingrese el primer numero"));
var dato2 = parseInt(prompt("Ingrese el segundo numero"));
if (dato1 > dato2) {
  var i = dato2;
  while (i <= dato1) {
    document.write(i);
    i++;
  }
} else if (dato1 < dato2) {
  var i = dato1;
  while (i <= dato2) {
    document.write(i);
    i++;
  }
} else if (dato1 == dato2) {
  document.write("Los datos ingresados son iguales");
} else {
  document.write("los valores ingresados no son validos");
} */

//4
/* 
var dato1 = parseInt(prompt("Ingrese el primer valor"));
var dato2 = parseInt(prompt("Ingrese el segundo valor"));

if (dato1 < dato2) {
  var i = dato1;
  var calculoModulo;
  while (i <= dato2) {
    calculoModulo = i % 2;
    if (calculoModulo != 0) {
      document.write(i);
    }
    i++;
  }
} else if (dato1 > dato2) {
  var i = dato2;
  var calculoModulo;
  while (i <= dato1) {
    calculoModulo = i % 2;
    if (calculoModulo != 0) {
      document.write(i);
    }
    i++;
  }
} else if (dato1 == dato2) {
  document.write("Los datos ingresados son iguales");
} else {
  document.write("los valores ingresados no son validos");
}
 */

//5
/* let numero1 = parseInt(prompt("Ingrese el primer numero: "));
let divisores = [];
for (let i = 0; i <= numero1; i++) {
  let residuo = numero1 % i;
  if (residuo == 0) {
    divisores.push(i);
  }
}
console.log(`Los divisores de ${numero1} son: ${divisores.join(" ")}`);
 */

//6
/* let numero = parseInt(prompt("Ingrese un numero de 1 a 10"));
for (let i = 1; i <= 10; i++) {
  let operacion = numero * i;
  console.log(`${numero} * ${i} = ${operacion}`);
} */
