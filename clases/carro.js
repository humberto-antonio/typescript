"use strict";
class Carro {
    constructor(marca, color) {
        this.marca = marca;
        this.color = color;
    }
    acelerar() {
        console.log(`El carro de marca ${this.marca} esta acelerando`);
    }
    frenar() {
        console.log(`El carro de marca ${this.marca} esta frenando`);
    }
}
const carro = new Carro("Chevrolet", "rojo");
console.log(carro.color);
console.log(carro.acelerar());
console.log(carro.frenar());
