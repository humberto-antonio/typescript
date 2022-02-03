"use strict";
function defecto(mensaje) {
    console.log(`${mensaje || "Hola mundo"}`);
}
defecto();
defecto('Aquí un dato');
