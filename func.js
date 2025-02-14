//funciones
//palabra reservada function + nombre de la función + parametros

function sumar(n1, n2){
    let total = n1 + n2;
    return total;
}

//llamada a mi función
let resultado = sumar(10,10)

console.log(resultado);

console.log(sumar(20,10));

sumar(20,50);

function saludar(nombre){
    console.log("hola, bienvenido/a " + nombre);
} //concatenar

saludar ("caroliada");
saludar ("rosario");

function casita(){
    let nombre = "ana";
    let apellido = "villanueva";
    console.log("esta es una casita.");
}
/*
casita();

console.log(nombre);//no se puede acceder porque esta dentro de una función (scope de bloque)

let nombre = "Vanesa";//variable global
let edad = 23;
let ciudad = "ciudad de méxico"
*/
// Entregable

//crear un sistema para seguimiento de los libros leídos

let librosLeidos=[];

//función para agregar libros
function agregarLibro(titulo){
    librosLeidos.push(titulo);
    return(librosLeidos);
}

//Función para mostrar libros leídos
function mostrarLibLei(){
    if (librosLeidos.length === 0){
        console.log("No has leído ningún libro.");
    } else {
        console.log("Los libros que has leído son: ");
        for (let i=0; i < librosLeidos.length; i++){
            console.log(`- ${librosLeidos[i]}`);
        }
    }
}

//Pruebas
agregarLibro("La ileada");
agregarLibro("La biblia");
agregarLibro("el anticristo");
agregarLibro("el psicoanalista");
agregarLibro("el laberinto de la soledad");
agregarLibro("cien años de soledad");
agregarLibro("más allá del bien y el mal");
agregarLibro("la insoportable levedad del ser");
agregarLibro("Mein Kampf");
agregarLibro("El libro vaquero");
agregarLibro("La muerte de un risueñor");
agregarLibro("El baldor: Álgebra");
mostrarLibLei();