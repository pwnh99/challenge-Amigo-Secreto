// Objetivo principal: practicar y reforzar la lógica de programación.
// Aquí implementarás la lógica necesaria para resolver el reto "Amigo Secreto".

// Crear un arreglo para guardar los participantes
let amigos = [];

// Función para añadir un nuevo amigo a la lista
function agregarParticipante() {
    // obtener el valor escrito en el campo de texto
    const input = document.getElementById('amigo');
    const nuevoNombre = input.value;

    // verificar que no esté vacío
    if (nuevoNombre.trim() === '') {
        alert('Por favor, escribe un nombre válido');
        return;
    }

    // guardar el nombre en el arreglo
    amigos.push(nuevoNombre);

    // limpiar el campo de entrada
    input.value = '';

    mostrarLista();
}

// Función que actualiza y dibuja la lista en pantalla
function mostrarLista() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    for (let participante of amigos) {
        let li = document.createElement('li');
        li.textContent = participante;
        ul.appendChild(li);
    }
}

// Función que selecciona aleatoriamente un amigo
function sortearParticipante() {
    if (amigos.length > 0) {
        let indice = Math.floor(Math.random() * amigos.length);
        let elegido = amigos[indice];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = elegido;
    } else {
        alert('La lista está vacía');
    }
}
