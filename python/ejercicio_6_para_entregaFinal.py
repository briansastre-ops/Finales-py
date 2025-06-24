def calcular_salarios():
    """
    Ejercicio 3 de la clase 10 para la entrga final:
    Calcula el salario de 5 empleados y la suma total de todos los salarios.
    Solicita horas trabajadas y tarifa por hora para cada empleado.
    """
    # Definir variables e inicializar
    # La variable 'tarifa' y 'salario' serán de tipo float (Real) para permitir decimales
    # 'horas' puede ser int o float dependiendo si se permiten horas fraccionadas,
    # en este caso la usaremos como float para mayor flexibilidad.
    
    suma_salarios = 0.0  # Inicializamos la suma total de salarios en 0.0

    # Bucle para 5 empleados (i desde 1 hasta 5)
    for i in range(1, 6): # range(1, 6) genera números del 1 al 5
        print(f"\n--- Salario del empleado {i} ---")
        
        while True:
            try:
                horas_trabajadas = float(input("Digite las horas trabajadas: "))
                if horas_trabajadas < 0:
                    print("Las horas trabajadas no pueden ser negativas. Intente de nuevo.")
                else:
                    break
            except ValueError:
                print("Entrada inválida. Por favor, ingrese un número para las horas.")
        
        while True:
            try:
                tarifa_por_hora = float(input("Digite la tarifa por hora: "))
                if tarifa_por_hora < 0:
                    print("La tarifa por hora no puede ser negativa. Intente de nuevo.")
                else:
                    break
            except ValueError:
                print("Entrada inválida. Por favor, ingrese un número para la tarifa.")
        
        # Calcular el salario individual
        salario_empleado = horas_trabajadas * tarifa_por_hora
        
        # Mostrar el salario del empleado actual
        print(f"El salario del empleado {i} es: ${salario_empleado:.2f}")
        
        # Acumular el salario a la suma total
        suma_salarios += salario_empleado
    
    # Mostrar la suma total de todos los salarios al finalizar el bucle
    print(f"\nLa suma de todos los salarios es: ${suma_salarios:.2f}")

# --- Programa principal ---
if __name__ == "__main__":
    calcular_salarios()
    print("\n¡Cálculo de salarios completado!")