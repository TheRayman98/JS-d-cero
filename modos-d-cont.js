//Programa para mostrar los múltiplos de 5 hasta un número límite especificado por el usuario.
let num = 999;
let cont = 1;

while (cont <= num){
    //código iterativo
    if (cont % 5 ===0){
        console.log(cont);
    }
    cont++; //incremento del contador
}

// prog para if

let num2 = 35;

for(let i = 0; i <= num2; i++){
    if (i % 2 !==0){
        console.log(i);
    
    }
}

// imprimir núm del 1 al 10

let i = 0; //inicialización

while(i <= 10){
    console.log(i);
    i++
}

console.log("fin del programa");

for (let i = 1; i <= 10; i ++){
    console.log(i);
}

//arrays

let per = []

let verduras = ['Lechuga', 'Tomate', 'Cebolla', 'Jitomate'];

console.log(verduras[2]);

console.log(verduras.length);

for(let i = 0; i < verduras.length; i++){
    console.log(verduras[i]);

}

// arreglos 2

let personas = [];

personas.push('Ana'); //arregla un elemento al final del array
personas.push('Diego');
personas.push('Liset');
personas.push('Liset');
personas.push('Marcela');
console.log(personas);

personas.pop(); //elimina el último elemento
console.log(personas);

personas.unshift('Alex'); // arregla un valor al inicio del array
personas.unshift('Yolanda');

personas.shift(); //Elimina el primer elemento del arreglo
console.log(personas);

//arrelgo frutas

let frutas = ['Papaya', 'Papaya', 'Naranja', 'Mandarina', 'Guayaba', 'Toronja', 'Sandia', 'Pera','Papaya', 'Papaya', 'Naranja', 'Mandarina', 'Guayaba', 'Toronja', 'Sandia', 'Pera'];
console.log('akiempieza');

let frutprc = {};

for (let i = 0; i < frutas.length; i++){
    let elm = frutas[i];
    if (!frutprc[elm]){
        let cont = 0;
        for (let c = 0; c < frutas.length; c++){
            if (elm === frutas[c]){
                cont++
            }
        }
        console.log(`${elm}: ${cont}`)
        frutprc[elm] = true;
    }
}