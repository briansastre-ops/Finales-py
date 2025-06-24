def obtener_elementos():
    """
    Ejercicio 2 de la clase 10 para la entrga final:
    Solicita al usuario la cantidad de elementos que desea ingresar.

    Returns:
        int: La cantidad de elementos a ingresar.
    """
    while True:
        try:
            cantidad_elementos = int(input("Digite la cantidad de elementos a ingresar: "))
            if cantidad_elementos <= 0:
                print("Por favor, ingrese un número entero positivo.")
            else:
                return cantidad_elementos
        except ValueError:
            print("Entrada inválida. Por favor, ingrese un número entero.")

def procesar_numeros(cantidad_elementos):
    """
    Procesa los números ingresados por el usuario, calculando la suma y el conteo
    de números pares e impares.

    Args:
        cantidad_elementos (int): La cantidad de números que el usuario va a ingresar.

    Returns:
        tuple: Una tupla conteniendo (suma_pares, conteo_pares, suma_impares, conteo_impares).
    """
    suma_pares = 0
    conteo_pares = 0
    suma_impares = 0
    conteo_impares = 0

    for i in range(cantidad_elementos):
        while True:
            try:
                numero = int(input(f"Digite el número {i + 1}: "))
                break # Sale del bucle interior si la entrada es válida
            except ValueError:
                print("Entrada inválida. Por favor, ingrese un número entero.")

        if numero % 2 == 0:  # El número es par
            suma_pares += numero
            conteo_pares += 1
        else:  # El número es impar
            suma_impares += numero
            conteo_impares += 1
            
    return suma_pares, conteo_pares, suma_impares, conteo_impares

def mostrar_resultados(suma_pares, conteo_pares, suma_impares, conteo_impares):
    """
    Muestra los resultados finales del análisis de números.

    Args:
        suma_pares (int): La suma total de los números pares.
        conteo_pares (int): La cantidad total de números pares.
        suma_impares (int): La suma total de los números impares.
        conteo_impares (int): La cantidad total de números impares.
    """
    print("\n--- Resultados ---")
    print(f"La suma de los números pares es: {suma_pares}")
    print(f"La cantidad de números pares es: {conteo_pares}")

    if conteo_impares > 0:
        promedio_impares = suma_impares / conteo_impares
        print(f"El promedio de los números impares es: {promedio_impares:.2f}")
    else:
        print("No se han digitado números impares.")

# --- Programa principal ---
if __name__ == "__main__":
    cantidad = obtener_elementos()
    suma_p, conteo_p, suma_i, conteo_i = procesar_numeros(cantidad)
    mostrar_resultados(suma_p, conteo_p, suma_i, conteo_i)
    print("\n¡Análisis completado!")