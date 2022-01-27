var Animal2 = /** @class */ (function () {
    function Animal2(nombre) {
        this.nombre = nombre;
    }
    Animal2.prototype.getNombre = function () {
        return this.nombre;
    };
    return Animal2;
}());
var animal2 = new Animal2("Perro");
console.log("El animal es un ".concat(animal2.getNombre()));
