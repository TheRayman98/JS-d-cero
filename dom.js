// Seleccionar elementos del DOM
const form = document.getElementById("form-comentarios");
const inputComentario = document.getElementById("input-comentario");
const listaComentarios = document.getElementById("lista-comentarios");

// Cargar los comentarios desde localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    const comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];
    comentariosGuardados.forEach(comentario => mostrarComentario(comentario));
});

// Manejar el evento submit del formulario
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener el texto del comentario
    const comentarioTexto = inputComentario.value;

    // Crear un objeto para el comentario con la fecha
    const comentario = {
        texto: comentarioTexto,
        fecha: new Date().toLocaleString()
    };

    // Mostrar el comentario en la página
    mostrarComentario(comentario);

    // Guardar el comentario en localStorage
    guardarComentario(comentario);

    // Limpiar el campo de texto
    inputComentario.value = "";
});

// Función para mostrar un comentario en la página
function mostrarComentario(comentario) {
    const comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario");
    comentarioDiv.innerHTML = `
        <p>${comentario.texto}</p>
        <span class="fecha">${comentario.fecha}</span>
        <button class="btn-eliminar">Eliminar</button>
    `;

    // Agregar funcionalidad al botón "Eliminar"
    const btnEliminar = comentarioDiv.querySelector(".btn-eliminar");
    btnEliminar.addEventListener("click", function() {
        comentarioDiv.remove(); // Eliminar el comentario del DOM
        eliminarComentario(comentario); // Eliminar del localStorage
    });

    listaComentarios.appendChild(comentarioDiv);
}

// Función para guardar un comentario en localStorage
function guardarComentario(comentario) {
    const comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];
    comentariosGuardados.push(comentario);
    localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));
}

// Función para eliminar un comentario de localStorage
function eliminarComentario(comentario) {
    let comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];
    comentariosGuardados = comentariosGuardados.filter(c => c.texto !== comentario.texto || c.fecha !== comentario.fecha);
    localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));
}
