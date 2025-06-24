// Ejercicio: Si el padre puede asistir al juego de su hijo
// Ejercicio 1 de la clase 9 para la entrga final de javascript 

// Declaración e inicialización de las variables
let vacaciones = false; 
let diaDescanso = false;

// Estructura condicional para determinar si el padre puede asistir
if (vacaciones || diaDescanso) {
    // Si el padre está de vacaciones O tiene un día de descanso
    console.log("El padre puede asistir al juego de su hijo");
} else {
    // Si el padre NO está de vacaciones Y NO tiene un día de descanso
    console.log("El padre No puede asistir al juego de su hijo");
}

// --- Ejemplos para probar diferentes casos (descomenta para probar) ---

// Caso 1: Vacaciones = true, diaDescanso = false (Debería poder asistir)

console.log("\n--- Probando Caso 1 ---");
vacaciones = true;
diaDescanso = false;
if (vacaciones || diaDescanso) {
    console.log("El padre puede asistir al juego de su hijo");
} else {
    console.log("El padre No puede asistir al juego de su hijo");
}


// Caso 2: Vacaciones = false, diaDescanso = true (Debería poder asistir)

console.log("\n--- Probando Caso 2 ---");
vacaciones = false;
diaDescanso = true;
if (vacaciones || diaDescanso) {
    console.log("El padre puede asistir al juego de su hijo");
} else {
    console.log("El padre No puede asistir al juego de su hijo");
}


// Caso 3: Vacaciones = true, diaDescanso = true (Debería poder asistir)

console.log("\n--- Probando Caso 3 ---");
vacaciones = true;
diaDescanso = true;
if (vacaciones || diaDescanso) {
    console.log("El padre puede asistir al juego de su hijo");
} else {
    console.log("El padre No puede asistir al juego de su hijo");
}
