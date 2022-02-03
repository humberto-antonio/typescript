"use strict";
class Padre2 {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}
class Hijo2 extends Padre2 {
    constructor(nombre, apellido, edad) {
        super(nombre, apellido);
        this.edad = edad;
    }
    mostrarNombreHijo() {
        console.log(`Nombre completo es: ${this.nombre}`);
    }
}
const hijo2 = new Hijo2("Jonathan Yael", "Antonio", 2);
console.log(hijo2.mostrarNombreHijo());
