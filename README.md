# Gestor de Personas - Array

Este repositorio contiene dos implementaciones del mismo programa: una en **JavaScript** y otra en **Python**. El programa permite gestionar una lista de personas con su información (nombre, edad y nota), mostrando los datos y ordenándolos por calificación.

## Requisitos Previos

Antes de usar cualquiera de los códigos, asegúrate de tener instalado:

- **Node.js** (versión 12 o superior) - [Descargar](https://nodejs.org/)
- **Python** (versión 3.7 o superior) - [Descargar](https://www.python.org/)
- **Git** - [Descargar](https://git-scm.com/)

## Clonar el Repositorio

Para clonar este repositorio en tu máquina local:

```bash
git clone <URL-del-repositorio>
cd array
```

Reemplaza `<URL-del-repositorio>` con la URL del repositorio en GitHub o tu plataforma de control de versiones.

## Ejecutar el Código JavaScript

### 1. Instalar las dependencias

Desde la carpeta del proyecto, ejecuta:

```bash
npm install
```

Este comando instalará la dependencia `prompt-sync` necesaria para que el programa funcione.

### 2. Ejecutar el programa

```bash
node main.js
```

El programa te pedirá:
- Cantidad de personas a registrar
- Para cada persona: nombre, edad y nota

Una vez ingresados los datos, el programa mostrará:
- La lista de personas en el orden que fueron ingresadas
- El nombre de la primera persona ingresada
- La lista de personas ordenadas por nota (de mayor a menor)

---

## Ejecutar el Código Python

### 1. Ejecutar el programa

```bash
python main.py
```

O si tienes Python 3 como versión principal:

```bash
python3 main.py
```

El programa te pedirá:
- Cantidad de personas a registrar
- Para cada persona: nombre, edad y nota

Una vez ingresados los datos, el programa mostrará:
- La lista de personas en el orden que fueron ingresadas
- El nombre de la primera persona ingresada
- La lista de personas ordenadas por nota (de mayor a menor)

---

## Descripción del Programa

Ambas versiones (JavaScript y Python) realizan exactamente las mismas funciones:

1. **Entrada de Datos**: Solicita la cantidad de personas y los datos de cada una (nombre, edad, nota)
2. **Almacenamiento**: Guarda los datos en estructuras de arreglos/listas
3. **Visualización**: Muestra la lista completa de personas
4. **Acceso**: Muestra el nombre de la primera persona ingresada
5. **Ordenamiento**: Ordena las personas por nota en orden descendente (de mayor a menor)

## Notas

- Ambos programas requieren entrada interactiva del usuario
- Las notas deben ser cantidades numéricas para que el ordenamiento funcione correctamente
- Los códigos procesan exactamente la cantidad de personas especificada al inicio

## Autor
Colman Máximo
Instituto - Seminario
