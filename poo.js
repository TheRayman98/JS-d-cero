// Abstacción: definir una clase (plantilla) de una figura geométrica

class Figura[
    constructor(color){ //el método constructor se asegura de que los objetos tengan las propiedades necearias para funcionar
        this.color = color;
    }
    //Metodos: son las acciones que puede realizar un objeto
    calcularArea(){
        throw new Error("El metodo no ha sido implementado.")
    }
    obtenerColor(){
        return this.color
    }
]

//Herencia: creamos subclases especificas (a partir de una clase padre)
class Circulo extends Figura{
    constructor(color,radio){
        super(color);
        this.radio = radio;
    }
    calcularArea(){
        return Math.PI * this.radio * this.radio;
    }
}

class Rectangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return this.base * this.altura;
    }
}

class Triangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
}

//crear mis objetos (instanciar)

const miCirculo = new Circulo("Morado", 14);
const miRectangulo = new Rectangulo("Verde", 12, 6);
const miTriangulo = new Triangulo("Azul", 15, 10);

console.log("color del círculo", miCirculo.)
console.log("color del Rectangulo", miRectangulo.)
console.log("Color de mi Triangulo", miTriangulo.)


