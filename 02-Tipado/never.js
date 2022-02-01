"use strict";
function regresarNever(mensaje) {
    throw new Error(mensaje);
}
console.log(regresarNever2('Error'));
regresarNever('Ups!!');
function regresarNever2(mensaje) {
    if (false) {
        throw new Error(mensaje);
    }
    return 'No hay error';
}
