// Aquí debemos importar las funciones que vamos a usar
const promt = require('prompt-sync')();

// Aquí le pedimmos al usuario la cantidad de personas y lo convierte a número entero
let cantidadPersonas = parseInt(promt('Ingrese la cantidad de personas: '));

// Inicializamos un contador
let contador = 0;

// Array donde se gardarán las personas
let personas = [];

// Variable para la suma de las notas
let sumaNotas = 0;

// Bucle para acumular los datos de cada persona
while (contador < cantidadPersonas) {
    //Array para guardar los datos de cada persona
    let persona = [];

    // Pedimos el nombre de la persona
    let nombre = promt('Ingrese el nombre de la persona: ');
    // Pedimos la edad de la persona, el parseInt se usa para convertir la entrada a un número entero
    let edad = parseInt(promt('Ingrese la edad de la persona: '));
    // Pedimos la nota de la persona, el parseInt se usa para convertir la entrada a un número entero
    let nota = parseInt(promt('Ingrese la nota de la persona: '));
    // Agregamos los datos de la persona al array
    persona.push(nombre, edad, nota);
    personas.push(persona);
    // Incrementamos el contador para pasar a la siguiente persona
    contador++;
}

// Muestra la lista completa de personas
console.log("Lista de personas (en el orden que se ingresaron): ");

// Recorremos el array de personas y mostramos su información
for (let persona of personas) {
    console.log(persona);
}

//Muestra el nombre de la primera persona ingresada
console.log('El nombre de la primera persona ingresada es:')
console.log(personas[0][0]);


// Indica que se mostrarán ordenadas por nota
console.log("Personas ordenadas por nota de mayor a menor:");

// Crea una copia del array y la ordena por la nota (posición 2)
let ordenados = [...personas].sort((a, b) => b[2] - a[2]);

// Muestra las personas ordenadas
for (let persona of ordenados) {
    console.log(persona);
}

// Recorre el array original para sumar todas las notas
for (let persona of personas) {
    sumaNotas = sumaNotas + persona[2]; // La nota está en la posición 2 del array de cada persona
}

// Muestra la suma total de las notas
console.log("La suma de las notas de las personas es:", sumaNotas);

// Calcula el promedio
let promedio = sumaNotas / cantidadPersonas;

// Muestra el promedio
console.log("El promedio de las notas de las personas es:", promedio);