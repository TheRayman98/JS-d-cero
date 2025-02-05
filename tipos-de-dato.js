//este es un comentario en JavaScript

//Console.log es una función que se utiliza para imprimir en la consola
console.log("Hola mundo");

//Declaración de variables
var nombre = "Ray"; //String
var edad = 26; //Number
var sueldo = 1.123; //Number
var casada = false; //Boolean
var vacunas = true; //Boolean
var hijos = null; //Null
var dato; //Undefined

console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(sueldo));
console.log(typeof(casada));
console.log(typeof(vacunas));
console.log(typeof(hijos));
console.log(typeof(dato));

//estos son los que pide la página de devf
console.log(typeof 42);            // number
console.log(typeof 'Veinticinco'); // string
console.log(typeof -666);          // number
console.log(typeof true);          // boolean
console.log(typeof 0);             // number
console.log("aquiestariaelerrordesintaxis");
console.log(typeof '"');            // string
console.log("aquiterminariaelerrordesintaxis");
console.log(typeof null);          // object
console.log(typeof undefined);     // undefined
console.log(typeof false);         // boolean

//La semántica es importante, es el significado de las palabras
var nombre = "Francia";//Correcto
var pais = 20;//incorrecto

//JS es débilmente tipado

//NaN not a number es un valor especial que indica que no es un número
console.log(10 * "ana");