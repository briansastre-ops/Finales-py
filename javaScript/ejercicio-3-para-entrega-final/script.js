// Convertir String a Number y verificar edad

// 1. Declarar una variable con un valor de cadena que representa un número
let miNumero = "21"; // Es una cadena de texto
console.log("Tipo de 'miNumero' antes de la conversión:", typeof miNumero); // Output: string

// 2. Convertir la cadena a un número usando la función Number()
let edad2 = Number(miNumero); // 'Number()' es una función que convierte a tipo numérico
console.log("Tipo de 'edad2' después de la conversión:", typeof edad2); // Output: number
console.log("Valor de 'edad2':", edad2); // Output: 21

// 3. Usar una estructura if-else para verificar la edad
if (edad2 >= 18) {
    console.log("Puede votar");
} else {
    console.log("Muy joven para votar");
}

// 4. Completar la línea incompleta utilizando el operador ternario
// El operador ternario es una forma concisa de un if-else para asignación de valores.
// Sintaxis: condicion ? valor_si_verdadero : valor_si_falso;
let resultado3 = edad2 >= 18 ? "Puede votar" : "Muy joven para votar";
console.log("Resultado del operador ternario:", resultado3); // Output: Puede votar

// --- Ejemplos adicionales para probar ---

// Si miNumero fuera "15"
let miNumero2 = "15";
let edad3 = Number(miNumero2);
console.log("\n--- Probando con edad 15 ---");
console.log("Tipo de 'edad3':", typeof edad3);
console.log("Valor de 'edad3':", edad3);
if (edad3 >= 18) {
    console.log("Puede votar");
} else {
    console.log("Muy joven para votar"); // Output: Muy joven para votar
}
let resultado4 = edad3 >= 18 ? "Puede votar" : "Muy joven para votar";
console.log("Resultado del operador ternario:", resultado4); // Output: Muy joven para votar


// Si miNumero fuera una cadena no numérica
let miNumeroInvalido = "hola";
let edadInvalida = Number(miNumeroInvalido);
console.log("\n--- Probando con una cadena no numérica ---");
console.log("Tipo de 'edadInvalida':", typeof edadInvalida); // Output: number (pero el valor es NaN)
console.log("Valor de 'edadInvalida':", edadInvalida); // Output: NaN
if (edadInvalida >= 18) { // NaN >= 18 es false
    console.log("Puede votar (con valor inválido)");
} else {
    console.log("Muy joven para votar (con valor inválido)"); // Output: Muy joven para votar (con valor inválido)
}
// También se puede usar isNaN() para verificar si la conversión fue un éxito
if (isNaN(edadInvalida)) {
    console.log("La entrada original no era un número válido.");
}