// Evitar repetir tu código
// Ejercicio 4 de la clase 9 para la entrga final de javascript 

// Definimos un array con los nombres de los días de la semana
// Los arrays en JavaScript son de base 0 (Lunes está en el índice 0, Martes en el 1, etc.)
let days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

function getDay(n) {
    // 1. Validar que el número esté dentro del rango de 1 a 7
    if (n < 1 || n > 7) {
        // Si el número es menor que 1 O mayor que 7, lanzamos un error
        throw new Error('El número del día está fuera de rango (debe ser entre 1 y 7)');
    }
    // 2. Devolver el nombre del día usando el índice n-1
    // Restamos 1 porque los índices del array comienzan en 0
    return days[n - 1];
}

// --- Ejemplos de uso ---

console.log("--- Probando la función getDay ---");

try {
    console.log("Día 1:", getDay(1)); // Debería imprimir: Lunes
    console.log("Día 4:", getDay(4)); // Debería imprimir: Jueves
    console.log("Día 7:", getDay(7)); // Debería imprimir: Domingo
    // console.log("Día 0:", getDay(0));   // Descomentar para ver el error
    // console.log("Día 8:", getDay(8));   // Descomentar para ver el error
} catch (error) {
    // Capturamos cualquier error lanzado por la función getDay
    console.error("Error al obtener el día:", error.message);
}

console.log("\n--- Otros ejemplos ---");
try {
    let diaUsuario = 3; // Simula una entrada de usuario
    console.log(`El día ${diaUsuario} es: ${getDay(diaUsuario)}`); // Debería imprimir: El día 3 es: Miércoles

    let diaInvalido = 9;
    console.log(`Intentando obtener el día ${diaInvalido}...`);
    console.log(`El día ${diaInvalido} es: ${getDay(diaInvalido)}`);
} catch (error) {
    console.error("Se encontró un problema:", error.message);
}