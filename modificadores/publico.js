"use strict";
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
}
const animal = new Animal("Perro");
console.log(`El animal es un ${animal.getNombre()}`);
