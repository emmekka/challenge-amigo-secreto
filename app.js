// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo');
    if (nombre == "") {
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(nombre);
        actualizarLista(nombre);
        limpiar(nombre);
    }
}

function actualizarLista(nombre) {
    let lista = document.getElementById('listaAmigos');

}
