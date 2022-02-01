"use strict";
let nombre = 'Humberto';
function mostrarNombre(dato) {
    console.log(dato + 1);
}
(() => {
    console.log(nombre);
})();
