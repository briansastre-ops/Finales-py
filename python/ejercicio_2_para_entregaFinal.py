def contar_tipos_numeros():
    """
    Ejercicio 2 de la clase 9 para la entrga final:
    Lee 10 números enteros y cuenta cuántos son positivos, negativos y neutros (cero).
    Al final, imprime los conteos.
    """
    # Definir e inicializar contadores
    conteo_positivos = 0
    conteo_negativos = 0
    conteo_neutros = 0

    print("Por favor, ingrese 10 números.")

    # Bucle para leer 10 números (el bucle va de 0 a 9, 10 iteraciones)
    for i in range(10): 
        while True:
            try:
                # Solicitar al usuario que digite un número
                num = int(input(f"Digite el número {i + 1}: "))
                break # Salir del bucle interno si la entrada es válida
            except ValueError:
                print("Entrada inválida. Por favor, ingrese un número entero.")

        # Clasificar el número y actualizar el contador correspondiente
        if num > 0:
            conteo_positivos += 1
        elif num < 0:
            conteo_negativos += 1
        else: # Si no es positivo ni negativo, debe ser cero (neutro)
            conteo_neutros += 1
    
    # Imprimir los resultados finales
    print("\n--- Resultados ---")
    print(f"La cantidad de positivos es: {conteo_positivos}")
    print(f"La cantidad de negativos es: {conteo_negativos}")
    print(f"La cantidad de neutros es: {conteo_neutros}")

# --- Programa principal ---
if __name__ == "__main__":
    contar_tipos_numeros()
    print("\n¡Análisis de números completado!")