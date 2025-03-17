// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let listaAmigos = document.getElementById('listaAmigos');
    let campo = document.getElementById('amigo');
    let nombre = campo.value.trim();
    if (nombre == "") {
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(nombre);
        actualizarLista(nombre, listaAmigos);
        campo.value = "";
    }
}

function actualizarLista(nombre, lista) {
    lista.innerHTML += `<li>${nombre}</li>`;
}

function sortearAmigo() {
    let listaResultado = document.getElementById('resultado');
    let cantAmigos = amigos.length;
    if (cantAmigos == 0) {
        alert("Por favor, añada un amigo.");
    } else {
        let index = Math.floor(Math.random() * cantAmigos);
        let amigoSorteado = amigos[index];
        actualizarLista(amigoSorteado, listaResultado);
    }
}