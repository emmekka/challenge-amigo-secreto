// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let campo = document.getElementById('amigo');
    let nombre = campo.value;
    if (nombre == "") {
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(nombre);
        actualizarLista(nombre);
        campo.value = "";
    }
}

function actualizarLista(nombre) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML += `<li>${nombre}</li>`;
}

