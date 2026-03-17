# Pide la cantidad de personas y lo convierte a entero
cantidad_personas = int(input("Ingrese la cantidad de personas que va a ingresar: "))

# Inicializa un contador en 0
contador = 0

# Lista donde se guardarán todas las personas
personas = []

# Variable para acumular la suma de notas
suma = 0

# Bucle que se ejecuta mientras el contador sea menor que la cantidad de personas
while contador < cantidad_personas:
    
    # Lista para guardar los datos de una persona
    persona = []
    
    # Se pide el nombre y se guarda en la posición 0
    persona.append(input("Ingrese el nombre de la persona: "))
    
    # Se pide la edad, se convierte a entero y se guarda en la posición 1
    persona.append(int(input("Ingrese la edad de la persona: ")))
    
    # Se pide la nota, se convierte a entero y se guarda en la posición 2
    persona.append(int(input("Ingrese la nota de la persona: ")))
    
    # Se agrega la persona a la lista principal
    personas.append(persona)
    
    # Se incrementa el contador
    contador += 1

# Muestra la lista completa de personas
print("Lista de personas (en el orden que fueron ingresadas): ")
for persona in personas:
    print(persona)

# Muestra el nombre de la primera persona (fila 0, columna 0)
print("Lista de personas en la fila 0, columna 0 (nombre): ")
print(personas[0][0])

# Explicación:
# reverse=True → ordena de mayor a menor
# key=lambda x: x[2] → indica que se ordena por la posición 2 (la nota)

print("Personas ordenas por nota de mayor a menor: ")

# sorted crea una nueva lista ordenada
ordenados = sorted(personas, key=lambda x: x[2], reverse=True)

# Muestra la lista ordenada
for persona in ordenados:
    print(persona)

# Recorre la lista original para sumar todas las notas
for persona in personas:
    suma = suma + persona[2]

# Muestra la suma de las notas
print(f"La suma de las notas de las personas es: {suma}")

# Calcula el promedio
promedio = suma / cantidad_personas

# Muestra el promedio
print(f"El promedio de las notas de las personas es: {promedio}")