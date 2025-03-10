function cambiarTexto() {
    let titulo =document.getElementById("titulo");
    titulo.textContent = 'Hola, desde el DOM';
}

function cambiarColor() {
    let parrafos = document.getElementsByClassName("texto");
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = 'blue';
    }
}

/*Selecciona todos los elementos con la clase texto, y luego usamos un bucle para cambiar de color todos los parrafors seleccionados.*/

function ocultarParrafo(){
    //selección
    let segundoParrafo = document.getElementsByTagName("p")[4];
    segundoParrafo.style.display = 'none';
}

/* Seleccionamos todos los elementos p y después indicamos mediante el indice cual tomamos [4] y lo ocultamos con display none.*/

function cambiarTextoDiv(){
    let parrafoDiv = document.querySelector("div p");
    parrafoDiv.textContent = 'Texto cambiado dentro del DIV';
}

/*Selecciona el primer parrafo que se encutntra dentro de un div*/

function marcarItems(){
    let items = document.querySelectorAll("li");
    items.forEach (item => {
        item.style.backgroundColor = 'yellow';
    });
}