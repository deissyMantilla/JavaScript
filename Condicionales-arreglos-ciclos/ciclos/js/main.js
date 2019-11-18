//Ciclos
//for
var mercado = ["pan", "leche", "huevos", "carne", "sal", "pasta"];
for (let i = 0; i < mercado.length; i++) {
  console.log(mercado[i]);
}

//while
/* var usuario;
var i = 0;
var detener = false;
var adivinar = 5;

while (detener == false) {
  usuario = parseInt(prompt("ingresa un nuemro de 1 a 10"));
  if (usuario == adivinar) {
    document.write("adivinaste");
    detener = true;
  } else {
    document.write("no adivinaste, sigue insistiendo");
  }
} */

//do while

var numero;
do {
  numero = parseInt(prompt("numero del 1 al 10"));
  console.log(numero);
} while (numero < 10);
