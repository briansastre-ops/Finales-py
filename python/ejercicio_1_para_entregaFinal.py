def es_bisiesto(anio):
    """
    Ejercicio 1 de la clase 9 para la entrga final:
    Verifica si un año dado es bisiesto según las reglas del calendario gregoriano.

    Args:
        anio (int): El año a verificar.

    Returns:
        bool: True si el año es bisiesto, False en caso contrario.
    """
    # Un año es bisiesto si es divisible por 4
    # PERO no si es divisible por 100
    # A MENOS que sea divisible por 400
    if (anio % 4 == 0 and anio % 100 != 0) or (anio % 400 == 0):
        return True
    else:
        return False

def proceso_ciclos():
    """
    Permite al usuario verificar si un año es bisiesto y repetir la acción
    hasta que el usuario lo decida.
    """
    seguir = "s"  # Inicializa la opción para seguir en 's' (sí)

    while seguir.lower() == "s": # El bucle continúa mientras el usuario quiera
        while True:
            try:
                anio = int(input("Digite un año: "))
                if anio < 0:
                    print("Por favor, ingrese un año positivo.")
                else:
                    break # Salir del bucle interno si la entrada es válida
            except ValueError:
                print("Entrada inválida. Por favor, ingrese un número entero para el año.")
        
        if es_bisiesto(anio):
            print(f"El año {anio} SI es Bisiesto.")
        else:
            print(f"El año {anio} NO es Bisiesto.")
        
        # Preguntar al usuario si desea seguir
        seguir = input("¿Desea seguir? Digite 's' para sí, cualquier otra tecla para no: ")
        
    print("¡Fin del proceso de verificación de años bisiestos!")

# --- Programa principal ---
if __name__ == "__main__":
    proceso_ciclos()