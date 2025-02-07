// var es una forma de declarar variables
var nombre = "Ana";
var nombre = "Javier";
var nombre = "Victor";

console.log(nombre);

//let nos permite redeclarar variables, lo que permite usar una misma variable pero con 2 valores distintos

let apellido1 = "Gutierrez";
let apellido2 = "Lopez";

//let sí permite cambiar el valor reasignandolo
apellido1 = "Perez";
console.log(apellido1);

//Const es constante, no se puede reasignar el valor
const PI = 3.14159265;

//PI = 4; //Esto no se puede hacer

//Op. básicas
let val1 = 27;
let val2 = 4;

let suma = val1 + val2;
console.log(suma);

let resta = val1 - val2;
console.log(resta);

let mult = val1 * val2;
console.log(mult);

let div = val1 / val2;
console.log(div);

let exp = val1 ** val2;
console.log(exp);

// Op. comparación
let n1 = 3;
let n2 = "3";

// comparador
let edad = 17;
let tID = true;
console.log(edad >= 18 && tID);

console.log("OR: || ");
let eME = false;
let eEST= false;
console.log(eME || eEST);

console.log("NOT: !");
let eFS = false;
console.log(!eFS);


// semáforo

let color = "rojo";

if (color === "verde"){
    console.log("adelante")
} else if (color === "amarillo") {
    console.log("detente")
} else if (color === "rojo") {
    console.log("alto")
}

//P obtener beca
let creditos = 10;
let promedio = 7.5;

if(creditos >=10 && promedio >= 8.5){
    console.log("tienes derecho a una beca");
} else {
    console.log("No tienes derecho a una beca");
}

// entregable
/*Problema: Evaluador de Notas con Mensajes Personalizados
Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:

Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba.*/

let nota = 90;

if (nota >= 90) {
    console.log("Aprobado con Excelente")
} else if (89 >= nota && nota >=75){
    console.log("Aprobado con Bien")
} else if (74 >= nota && nota >= 60){
    console.log("Aprobado con Suficiente")
} else if ( 60 > nota) {
    console.log("No Aprobado")
}