package org.example; //

import java.util.Scanner; // Importamos la clase Scanner para leer la entrada del usuario

public class OperacionesNumericas {
    public static void main(String[] args) {
        // Crear un objeto Scanner para leer la entrada del usuario
        Scanner scanner = new Scanner(System.in);

        // --- 1. Definir variables ---
        // Usamos 'double' para permitir números con decimales
        double num1;
        double num2;
        double resultado;

        // --- 2. Solicitar y leer los dos números ---
        System.out.println("--- Ejercicio 3: Operaciones con Dos Números ---");
        System.out.println("Digite el primer número:");
        // Manejo de errores para la primera entrada
        try {
            num1 = scanner.nextDouble();
        } catch (java.util.InputMismatchException e) {
            System.out.println("Entrada inválida. Por favor, ingrese un número válido.");
            scanner.close();
            return; // Termina el programa
        }

        System.out.println("Digite el segundo número:");
        // Manejo de errores para la segunda entrada
        try {
            num2 = scanner.nextDouble();
        } catch (java.util.InputMismatchException e) {
            System.out.println("Entrada inválida. Por favor, ingrese un número válido.");
            scanner.close();
            return; // Termina el programa
        }

        // --- 3. Aplicar la lógica condicional ---
        // Si los números son iguales, se multiplican
        if (num1 == num2) {
            System.out.println("Los números son iguales. Se multiplican.");
            resultado = num1 * num2;
        }
        // Si el primer número es mayor que el segundo, se restan
        else if (num1 > num2) {
            System.out.println("El primer número es mayor que el segundo. Se restan.");
            resultado = num1 - num2;
        }
        // Si no son iguales y el primero no es mayor, entonces el segundo es mayor. Se suman.
        else {
            System.out.println("El segundo número es mayor que el primero. Se suman.");
            resultado = num1 + num2;
        }

        // --- 4. Mostrar el resultado ---
        System.out.printf("El resultado es: %.2f%n", resultado); // Formateamos a 2 decimales

        // --- 5. Cerrar el objeto Scanner ---
        scanner.close();
        System.out.println("\n¡Operaciones completadas!");
    }
}