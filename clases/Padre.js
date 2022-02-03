"use strict";
class Padre {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}
class Hijo extends Padre {
    constructor(nombre, apellido, edad) {
        super(nombre, apellido);
        this.edad = edad;
    }
    mostrarNombreHijo() {
        console.log(`Nombre completo es: ${this.getNombreCompleto()}`);
    }
}
const hijo = new Hijo("Jonathan Yael", "Antonio", 2);
console.log(hijo.mostrarNombreHijo());
