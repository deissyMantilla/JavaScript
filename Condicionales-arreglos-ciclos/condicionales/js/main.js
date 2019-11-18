var edad1 = 34;
var edad2 = 36;

if (edad1 > edad2) {
  document.write("edad uno es mayor");
} else if (edad2 > edad1) {
  document.write("edad dos es mayor" + "<br>");
} else if (edad1 === edad2) {
  document.write("las edades son iguales");
} else {
  document.write("Ingresar un numero");
}

/* var edadPersona = 18;
var mayoriaEdad = 18;

if (edadPersona >= mayoriaEdad) {
  if (edadPersona == 18) {
    document.write("siga pero con cedula en mano");
  } else {
    document.write("siga");
  }
} else {
  document.write("largo de aqui");
} */

/* var tiempoCoccion = 15;
var tieneSal = false;

if (tiempoCoccion >= 15 || tieneSal == true) {
  console.log("rico");
} else {
  console.log("...");
} */

// Switch
var mes = prompt("Ingrese numero del mes");
switch (mes) {
  case "1":
    console.log("Enero");
    break;
  case "2":
    console.log("Febrero ");
    break;
  case "3":
    console.log("Marzo");
    break;
  case "4":
    console.log("Abril");
    break;
  default:
    console.log("Ingresar mes");
    break;
}
