"use strict";
function mostrarUnMensaje() {
    console.log(regresarMensaje());
}
function regresarMensaje() {
    return 'Hola mundo desde typescript';
}
mostrarUnMensaje();
const funcionFlecha = () => {
    return 'Mensaje';
};
const regresarVoid = () => {
    console.log('Sin retorno');
};
console.log(funcionFlecha());
regresarVoid();
