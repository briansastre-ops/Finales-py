// 11.3 Ejercicio: Meses del año

/**
 * Ejercicio 5 de la clase 9 para la entrga final de javascript 
 * Función principal para gestionar el ejercicio de los meses del año.
 * Demuestra el uso de 'switch' y una 'opción mejorada' con un array.
 */
function mesesDelAnio() {
    let numeroMes;

    // --- Solicitar al usuario un número de mes ---
    while (true) {
        let inputMes = prompt("Digite un número de mes (1-12):");
        numeroMes = parseInt(inputMes); // Convierte la entrada a un número entero

        // Validar que la entrada sea un número y esté en el rango 1-12
        if (isNaN(numeroMes) || numeroMes < 1 || numeroMes > 12) {
            alert("Entrada inválida. Por favor, digite un número entre 1 y 12.");
        } else {
            break; // Salir del bucle si la entrada es válida
        }
    }

    console.log(`\n--- Usando la estructura 'switch' para el mes ${numeroMes} ---`);
    // --- Versión 1: Usando la estructura 'switch' ---
    switch (numeroMes) {
        case 1:
            console.log("El mes es Enero");
            break;
        case 2:
            console.log("El mes es Febrero");
            break;
        case 3:
            console.log("El mes es Marzo");
            break;
        case 4:
            console.log("El mes es Abril");
            break;
        case 5:
            console.log("El mes es Mayo");
            break;
        case 6:
            console.log("El mes es Junio");
            break;
        case 7:
            console.log("El mes es Julio");
            break;
        case 8:
            console.log("El mes es Agosto");
            break;
        case 9:
            console.log("El mes es Septiembre");
            break;
        case 10:
            console.log("El mes es Octubre");
            break;
        case 11:
            console.log("El mes es Noviembre");
            break;
        case 12:
            console.log("El mes es Diciembre");
            break;
        default:
            // Este caso debería ser inalcanzable si la validación inicial funciona correctamente,
            // pero es buena práctica tenerlo en un switch.
            console.log("Número de mes fuera de rango.");
            break;
    }

    console.log(`\n--- Usando la "opción mejorada" (array) para el mes ${numeroMes} ---`);
    // --- Versión 2: Opción Mejorada (usando un array) ---
    // Definimos un array con los nombres de los meses.
    // El índice 0 lo dejamos vacío o ponemos algo para que los índices coincidan con los números de mes (1-12)
    // O, más común, restamos 1 al número de mes para usar el índice 0 para Enero, 1 para Febrero, etc.
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    // Validar el rango antes de acceder al array para evitar 'undefined'
    if (numeroMes >= 1 && numeroMes <= 12) {
        // Accedemos al mes. Si numeroMes es 1, queremos el índice 0. Si es 12, queremos el índice 11.
        console.log(`El mes es ${meses[numeroMes - 1]}`);
    } else {
        // Este caso ya se maneja en la validación de la entrada, pero es bueno tenerlo aquí también.
        console.log("Número de mes inválido para la opción mejorada.");
    }

    console.log("\n¡Ejercicios de meses del año completados!");
}

// --- Llamada a la función principal para ejecutar el programa ---
mesesDelAnio();