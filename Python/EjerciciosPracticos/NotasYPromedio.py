# Programa sencillo: pide nombre, pide notas (hasta que escriba "fin"), calcula promedio y muestra estado

# Función: calcular el promedio
def calcular_promedio(notas):
    return sum(notas) / len(notas)

# Función: aprobado o reprobado
def estado_estudiante(promedio):
    if promedio >= 3:
        return "Aprobado"
    else:
        return "Reprobado"

# Función extra: excelente / bueno / suficiente / malo
def estado_promedio(promedio):
    if promedio >= 4.5:
        return "Excelente"
    elif promedio >= 4:
        return "Bueno"
    elif promedio >= 3:
        return "Suficiente"
    else:
        return "Malo"

# Programa principal (más fácil)
nombre = input("Nombre: ")

notas = []
while True:
    dato = input("Ingresa una nota (0 a 5) o escribe 'fin': ").lower()

    if dato == "fin":
        break

    nota = float(dato)  # convierte a número
    if nota < 0 or nota > 5:
        print("Nota inválida, debe estar entre 0 y 5")
    else:
        notas.append(nota)

# Si no ingresó notas, evita error
if len(notas) == 0:
    print("No ingresaste notas.")
else:
    prom = round(calcular_promedio(notas), 2)
    print(nombre, ":", prom, "-", estado_estudiante(prom), "-", estado_promedio(prom))