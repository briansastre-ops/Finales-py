def calcular_factorial():
    """
    Ejercicio 1 de la clase 10 para la entrga final: Calcular el factorial de un número mayor o igual a 0
    """
    while True:
        try:
            num = int(input("Digite un número mayor o igual a 0: "))
            if num < 0:
                print("Un número menor que 0 no es válido.")
                continue
            
            factorial = 1
            for i in range(1, num + 1):
                factorial *= i
            
            print(f"El factorial es: {factorial}")
            break
        except ValueError:
            print("Por favor, ingrese un número entero válido.")

# Llamar a la función para ejecutarla
calcular_factorial()