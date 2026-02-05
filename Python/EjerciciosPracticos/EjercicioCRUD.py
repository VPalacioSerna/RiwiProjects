# Cree un programa completo que permita gestionar un inventario de productos usando funciones
inventario = []

# Registrar productos: Nombre, precio, cantidad
def registrar_producto():
    nombre = input("Nombre del producto: ").strip()
    precio = float(input("Precio: "))
    cantidad = int(input("Cantidad: "))
    inventario.append({"nombre": nombre, "precio": precio, "cantidad": cantidad})
    print("Producto registrado ")


# Mostrar inventario, Listar todos los productos
def mostrar_inventario():
    if len(inventario) == 0:
        print("Inventario vacío.")
        return

    print("\n--- INVENTARIO ---")
    for i, p in enumerate(inventario, start=1):
        print(f"{i}. {p['nombre']} | Precio: {p['precio']} | Cantidad: {p['cantidad']}")


# Buscar producto (devuelve el producto o None)
def buscar_producto(nombre_buscado):
    for p in inventario:
        if p["nombre"].lower() == nombre_buscado.lower():
            return p
    return None


# Buscar y actualizar
def actualizar_producto():
    nombre = input("Nombre del producto a buscar: ").strip()
    producto = buscar_producto(nombre)

    if producto is None:
        print("Producto no encontrado ")
    else:
        print("Producto encontrado:", producto["nombre"])
        producto["precio"] = float(input("Nuevo precio: "))
        producto["cantidad"] = int(input("Nueva cantidad: "))
        print("Producto actualizado ")


# Eliminar productos
def eliminar_producto():
    nombre = input("Nombre del producto a eliminar: ").strip()
    producto = buscar_producto(nombre)

    if producto is None:
        print("Producto no encontrado ")
    else:
        inventario.remove(producto)
        print("Producto eliminado ")


# Menú
def menu():
    while True:
        print("\n--- MENÚ INVENTARIO ---")
        print("1. Registrar producto")
        print("2. Mostrar inventario")
        print("3. Buscar y actualizar producto")
        print("4. Eliminar producto")
        print("5. Salir")

        opcion = input("Elige una opción: ")

        if opcion == "1":
            registrar_producto()
        elif opcion == "2":
            mostrar_inventario()
        elif opcion == "3":
            actualizar_producto()
        elif opcion == "4":
            eliminar_producto()
        elif opcion == "5":
            print("Saliendo... 👋")
            break
        else:
            print("Opción inválida. Intenta de nuevo.")


# Ejecutar programa
menu()