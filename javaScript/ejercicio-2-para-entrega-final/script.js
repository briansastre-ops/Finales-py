// Operador ternario en JavaScript
// Ejercicio 2 de la clase 9 para la entrga final de javascript 

// Ejemplo 1: Comparación simple
// La condición es '3 > 2'. Si es verdadera, asigna "Verdadero". Si es falsa, asigna "Falso".
let resultado2 = 3 > 2 ? "Verdadero" : "Falso";
console.log(resultado2); // Esto imprimirá: Verdadero

// Ejemplo 2: Determinar si un número es par o impar
let numero = 9;

// La condición es 'numero % 2 == 0'.
// Si el residuo de dividir 'numero' entre 2 es 0, es PAR.
// Si no, es IMPAR.
resultado2 = numero % 2 == 0 ? "Es un número PAR" : "Es un número IMPAR";
console.log(resultado2); // Esto imprimirá: Es un número IMPAR

// --- Puedes probar con otros valores ---

let otroNumero = 10;
let mensajeParImpar = otroNumero % 2 == 0 ? "Es un número PAR" : "Es un número IMPAR";
console.log(`El número ${otroNumero} ${mensajeParImpar}`); // Esto imprimirá: El número 10 Es un número PAR

let edad = 17;
let puedeVotar = edad >= 18 ? "Puede votar" : "No puede votar";
console.log(puedeVotar); // Esto imprimirá: No puede votar