// Seleccionar elementos del DOM
const form = document.getElementById("form-comentarios");
const inputComentario = document.getElementById("input-comentario");
const listaComentarios = document.getElementById("lista-comentarios");

// Manejar el evento submit del formulario
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener el texto del comentario
    const comentarioTexto = inputComentario.value;

    // Crear un nuevo elemento para el comentario
    const comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario");
    comentarioDiv.innerHTML = `
        <p>${comentarioTexto}</p>
        <span class="fecha">${new Date().toLocaleString()}</span>
        <button class="btn-eliminar">Eliminar</button>
    `;

    // Agregar el comentario a la lista
    listaComentarios.appendChild(comentarioDiv);

    // Limpiar el campo de texto
    inputComentario.value = "";

    // Agregar funcionalidad al botón "Eliminar"
    const btnEliminar = comentarioDiv.querySelector(".btn-eliminar");
    btnEliminar.addEventListener("click", function() {
        comentarioDiv.remove(); // Eliminar el comentario
    });
});
