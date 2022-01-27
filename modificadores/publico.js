var Animal = /** @class */ (function () {
    function Animal(nombre) {
        this.nombre = nombre;
    }
    Animal.prototype.getNombre = function () {
        return this.nombre;
    };
    return Animal;
}());
var animal = new Animal("Perro");
console.log("El animal es un ".concat(animal.getNombre()));
