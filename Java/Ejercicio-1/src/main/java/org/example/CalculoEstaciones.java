package org.example; //

import java.util.Scanner; // Importamos la clase Scanner para leer la entrada del usuario

public class CalculoEstaciones {
    public static void main(String[] args) {
        // Creamos un objeto Scanner para leer la entrada desde la consola
        Scanner scanner = new Scanner(System.in);

        // Pedimos al usuario que ingrese el número del mes
        System.out.println("Digite un número de mes (1-12):");
        int mes = 0; // Inicializamos mes

        // Bloque try-catch para manejar entradas no numéricas
        try {
            mes = scanner.nextInt(); // Leemos el número entero ingresado por el usuario
        } catch (java.util.InputMismatchException e) {
            System.out.println("Entrada inválida. Por favor, ingrese un número entero.");
            return; // Termina el programa si la entrada no es un número
        }

        // Variable para almacenar el nombre de la estación, con un valor por defecto
        var estacion = "Estación desconocida";

        // Usamos la estructura switch para determinar la estación
        switch (mes) {
            // Estaciones del Hemisferio Sur (como estamos en Argentina)
            case 1: // Enero
            case 2: // Febrero
            case 3: // Marzo
                estacion = "Verano";
                break; // Salimos del switch

            case 4: // Abril
            case 5: // Mayo
            case 6: // Junio
                estacion = "Otoño";
                break;

            case 7: // Julio
            case 8: // Agosto
            case 9: // Septiembre
                estacion = "Invierno";
                break;

            case 10: // Octubre
            case 11: // Noviembre
            case 12: // Diciembre
                estacion = "Primavera";
                break;

            default:
                // Si el número de mes no es del 1 al 12
                estacion = "Número de mes inválido o fuera de rango";
                break;
        }

        // Imprimimos el resultado
        System.out.println("La estación para el mes " + mes + " es: " + estacion);

        // Cerramos el objeto Scanner para liberar recursos
        scanner.close();
        System.out.println("\n¡Cálculo de estación completado!");
    }
}