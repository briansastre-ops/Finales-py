package org.example; //

import java.util.Scanner; // Necesario para leer la entrada del usuario

public class CalculoDescuento {
    public static void main(String[] args) {
        // Crear un objeto Scanner para leer la entrada del usuario
        Scanner scanner = new Scanner(System.in);

        // --- 1. Definir variables ---
        // Usamos 'double' para las cantidades monetarias para mayor precisión con decimales
        double compra;        // Almacenará la cantidad total de la compra
        double descuento = 0.0; // Almacenará el monto del descuento, inicializado en 0
        double precioFinal;   // Almacenará el precio final a pagar

        // --- 2. Solicitar y leer la cantidad a pagar ---
        System.out.println("--- Cálculo de Descuento en Almacén ---");
        System.out.println("Digite la cantidad total de la compra:");

        // Bloque try-catch para manejar entradas no numéricas
        try {
            compra = scanner.nextDouble(); // Leemos la cantidad de la compra
        } catch (java.util.InputMismatchException e) {
            System.out.println("Entrada inválida. Por favor, ingrese un valor numérico para la compra.");
            scanner.close(); // Cerrar el scanner antes de salir
            return; // Termina la ejecución del programa
        }

        // --- 3. Aplicar la lógica del descuento ---
        // Si la compra supera los 100, se aplica un 20% de descuento
        if (compra > 100) {
            descuento = compra * 0.20; // Calcula el 20% de descuento
            System.out.println("¡Felicidades! Se aplicó un descuento del 20%.");
        } else {
            // Si la compra es 100 o menos, no hay descuento.
            // La variable 'descuento' ya está en 0.0, así que no es necesario reasignar.
            System.out.println("Su compra no supera los $100, no se aplica descuento.");
        }

        // --- 4. Calcular el precio final ---
        precioFinal = compra - descuento;

        // --- 5. Mostrar el resultado ---
        System.out.printf("El precio original de la compra fue: $%.2f%n", compra);
        System.out.printf("El descuento aplicado es: $%.2f%n", descuento);
        System.out.printf("El precio a pagar es: $%.2f%n", precioFinal);

        // --- 6. Cerrar el objeto Scanner ---
        scanner.close();
        System.out.println("\n¡Cálculo de compra completado!");
    }
}