var mercado = ["pan", "leche", "huevos"];

console.log(mercado[2]);
mercado[3] = "mantequilla";
console.log(mercado);
console.log(mercado.length);
mercado[mercado.length] = "carne";
mercado.push("cereal");
console.log(mercado);
mercado.pop(1);
console.log(mercado);
mercado.splice(0, 2); //quita elementos del arreglo se indica el inicio y cuanto elemtos
console.log(mercado);
