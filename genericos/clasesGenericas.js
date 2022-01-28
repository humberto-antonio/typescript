var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.mostrar = function (dato) {
        return dato;
    };
    return Persona;
}());
var persona = new Persona();
console.log(persona.mostrar("Humberto"));
