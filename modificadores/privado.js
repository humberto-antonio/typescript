"use strict";
class Animal2 {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
}
const animal2 = new Animal2("Perro");
console.log(`El animal es un ${animal2.getNombre()}`);
