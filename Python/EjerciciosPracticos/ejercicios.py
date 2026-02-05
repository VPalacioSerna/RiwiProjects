# 1. Escribe un programa que pida dos numeros y muestre cuál es mayor
a = int(input("Número 1: "))
b = int(input("Número 2: "))
if a > b:
    print(a)
else:
    print(b)

# 2. Solicita al usuario su edad y muestra si es mayor o menor de edad
edad = int(input("Edad: "))
if edad >= 18:
    print("Mayor de edad")
else:
    print("Menor de edad")

# 3. Cree un programa que pida un numero y diga si es positivo, negativo o cero
num = int(input("Número: "))
if num > 0:
    print("Positivo")
elif num < 0:
    print("Negativo")
else:
    print("Cero")

# 4. Pide un numero del 1 al 7 y muestra que día de la semana corresponde
dia = int(input("Número del 1 al 7: "))
if dia == 1:
    print("Lunes")
elif dia == 2:
    print("Martes")
elif dia == 3:
    print("Miércoles")
elif dia == 4:
    print("Jueves")
elif dia == 5:
    print("Viernes")
elif dia == 6:
    print("Sábado")
elif dia == 7:
    print("Domingo")

# 5. Solicita tres numeros y determina cual es el mayor de los tres
a = int(input("Número 1: "))
b = int(input("Número 2: "))
c = int(input("Número 3: "))
if a >= b and a >= c:
    print(a)
elif b >= a and b >= c:
    print(b)
else:
    print(c)

# 6. Crea un programa que pida una letra y diga si es vocal o consonante
letra = input("Letra: ").lower()
if letra in "aeiou":
    print("Vocal")
else:
    print("Consonante")

# 7. Escribe un programa que solicite una contraseña hasta que sea "python123"
clave = ""
while clave != "python123":
    clave = input("Contraseña: ")
print("Acceso correcto")

# 8. Realiza un programa que sume los números del 1 al 100 usando while
suma = 0
i = 1
while i <= 100:
    suma += i
    i += 1
print(suma)

# 9. Pide un número y muestra su tabla de multiplicar del 1 al 10
num = int(input("Número: "))
for i in range(1, 11):
    print(num, "x", i, "=", num * i)

# 10. Solicita 5 números y muestra cuantos son pares y cuantos impares
pares = 0
impares = 0
for i in range(5):
    num = int(input("Número: "))
    if num % 2 == 0:
        pares += 1
    else:
        impares += 1
print("Pares:", pares)
print("Impares:", impares)

# 11. Pide numeros hasta que el usuario ingrese 0 y muestra la suma total
suma = 0
num = 1
while num != 0:
    num = int(input("Número: "))
    suma += num
print(suma)

# 12. Pide una nota (0-5) y muestra si el estudiante aprueba o reprueba
nota = float(input("Nota: "))
if nota >= 3:
    print("Aprueba")
else:
    print("Reprueba")

# 13. Pide el año actual y el año de nacimiento y calcula la edad
actual = int(input("Año actual: "))
nacimiento = int(input("Año de nacimiento: "))
print(actual - nacimiento)

# 14. Pide una palabra y la muestra al revés
palabra = input("Palabra: ")
print(palabra[::-1])

# 15. Cuenta cuantas letras "a" tiene una palabra
palabra = input("Palabra: ")
contador = 0
for letra in palabra:
    if letra == "a":
        contador += 1
print(contador)

# 16. Solicita números hasta que el usuario escriba "fin" y muestra el promedio
suma = 0
cont = 0
while True:
    dato = input("Número o fin: ")
    if dato == "fin":
        break
    suma += int(dato)
    cont += 1
print(suma / cont)

# 17. Pide una palabra y determina si es un palíndromo
palabra = input("Palabra: ")
if palabra == palabra[::-1]:
    print("Es palíndromo")
else:
    print("No es palíndromo")

# 18. Pide un número y muestra los números pares desde 1 hasta ese número
num = int(input("Número: "))
for i in range(1, num + 1):
    if i % 2 == 0:
        print(i)
        