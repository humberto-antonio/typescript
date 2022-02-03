"use strict";
class SuperClass {
    saludo() {
        console.log('Hola mundo');
    }
}
class Hijo extends SuperClass {
    metodo1() {
        console.log('Hola metodo');
    }
}
const hijo = new Hijo();
console.log(hijo.saludo());
