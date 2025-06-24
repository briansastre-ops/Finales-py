package org.example;

import java.util.Scanner; // Necesario para leer la entrada del usuario

public class SistemaCalificaciones {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // Crear objeto Scanner

        System.out.println("--- Sistema de Calificaciones ---");
        System.out.println("Digite un número entero entre 0 y 10:");

        int calificacion = -1; // Inicializamos la calificación con un valor fuera de rango

        // Leer la calificación y manejar posibles errores de entrada
        try {
            calificacion = scanner.nextInt();
        } catch (java.util.InputMismatchException e) {
            System.out.println("Entrada inválida. Por favor, ingrese un número entero.");
            scanner.close(); // Cerrar scanner antes de salir
            return; // Termina la ejecución si la entrada no es un número
        }

        // --- Versión 1: Usando la sentencia de control if-else if-else ---
        System.out.println("\n--- Clasificación con if-else if-else ---");
        if (calificacion < 0 || calificacion > 10) {
            System.out.println("Fuera de rango");
        } else if (calificacion == 10) { // O calificacion >= 9 si 9 es 'A'
            System.out.println("Calificación: A");
        } else if (calificacion >= 8) { // 8 o 9
            System.out.println("Calificación: B");
        } else if (calificacion >= 6) { // 6 o 7
            System.out.println("Calificación: C");
        } else if (calificacion >= 4) { // 4 o 5
            System.out.println("Calificación: D");
        } else { // Cualquier otro caso dentro del rango 0-3
            System.out.println("Calificación: F");
        }

        // --- Versión 2: Usando la sentencia de control switch ---
        // Nota: Para rangos, switch es menos directo que if-else if.
        // A menudo se usa con un cociente o se repiten cases.
        // Aquí usamos una técnica común donde el switch evalúa un valor transformado.
        System.out.println("\n--- Clasificación con switch ---");
        String mensajeSwitch;

        if (calificacion < 0 || calificacion > 10) {
            mensajeSwitch = "Fuera de rango";
        } else {
            // Dividimos la calificación por un factor (ej. 2) para obtener casos más amplios
            // o simplemente usamos los valores exactos para cada caso si son pocos y discretos.
            // Para rangos, a veces se puede hacer así (Java 14+):
            // switch (calificacion) {
            //     case 10 -> mensajeSwitch = "A";
            //     case 8, 9 -> mensajeSwitch = "B";
            //     case 6, 7 -> mensajeSwitch = "C";
            //     case 4, 5 -> mensajeSwitch = "D";
            //     case 0, 1, 2, 3 -> mensajeSwitch = "F";
            //     default -> mensajeSwitch = "Valor inesperado (debería estar cubierto)";
            // }

            // Para versiones anteriores de Java o una representación más clásica:
            // Usamos un 'truco' de switch con divisiones para agrupar rangos
            // O una serie de if/else anidados dentro de un default si la lógica es compleja
            // La forma más directa es usar un 'switch expression' si se permite Java 14+
            // O, simplemente, un switch para cada posible valor discreto:
            switch (calificacion) {
                case 10:
                    mensajeSwitch = "Calificación: A";
                    break;
                case 9:
                case 8:
                    mensajeSwitch = "Calificación: B";
                    break;
                case 7:
                case 6:
                    mensajeSwitch = "Calificación: C";
                    break;
                case 5:
                case 4:
                    mensajeSwitch = "Calificación: D";
                    break;
                case 3:
                case 2:
                case 1:
                case 0:
                    mensajeSwitch = "Calificación: F";
                    break;
                default: // Este default en teoría no se alcanzaría por la validación inicial
                    mensajeSwitch = "Error interno en clasificación switch.";
                    break;
            }
        }
        System.out.println(mensajeSwitch);

        scanner.close(); // Siempre cerrar el scanner al finalizar
        System.out.println("\n¡Sistema de calificaciones completado!");
    }
}