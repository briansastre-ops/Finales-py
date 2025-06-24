def analizar_calificaciones_grupo():
    """
    Ejercicio 3 de la clase 9 para la entrga final:
    Calcula la calificación promedio y la calificación más baja de un grupo de 10 estudiantes.
    """
    # Inicializar variables
    suma_calificaciones = 0.0  # Usamos float para permitir calificaciones con decimales
    # Inicializamos calificacion_baja con un valor muy alto para que cualquier calificación
    # ingresada sea inicialmente más baja.
    calificacion_baja = 9999.0 
    
    print("Por favor, ingrese las calificaciones para 10 estudiantes.")

    # Bucle para leer las 10 calificaciones (i va de 0 a 9, 10 iteraciones)
    for i in range(10):
        while True:
            try:
                # Solicitar al usuario que digite una calificación
                calificacion = float(input(f"Digite la calificación del estudiante {i + 1}: "))
                
                # Opcional: Podríamos añadir una validación para que las calificaciones sean positivas
                if calificacion < 0:
                    print("La calificación no puede ser negativa. Intente de nuevo.")
                else:
                    break # Salir del bucle interno si la entrada es válida y no negativa
            except ValueError:
                print("Entrada inválida. Por favor, ingrese un número para la calificación.")
        
        # Suma interactiva de las calificaciones
        suma_calificaciones += calificacion
        
        # Evaluar la calificación más baja
        if calificacion < calificacion_baja:
            calificacion_baja = calificacion
            
    # Calcular la calificación promedio
    # Dividimos por 10 porque es el tamaño fijo del grupo según el enunciado
    if 10 > 0: # Para evitar división por cero si en algún caso se cambiara el tamaño del grupo a 0
        calificacion_promedio = suma_calificaciones / 10
    else:
        calificacion_promedio = 0 # O podríamos manejarlo como un error o no calcularlo

    # Imprimir los resultados
    print("\n--- Resultados del Grupo ---")
    print(f"La calificación promedio del grupo es: {calificacion_promedio:.2f}")
    print(f"La calificación más baja de todo el grupo es: {calificacion_baja:.2f}")

# --- Programa principal ---
if __name__ == "__main__":
    analizar_calificaciones_grupo()
    print("\n¡Análisis de calificaciones completado!")