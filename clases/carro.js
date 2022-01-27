var Carro = /** @class */ (function () {
    function Carro(marca, color) {
        this.marca = marca;
        this.color = color;
    }
    Carro.prototype.acelerar = function () {
        console.log("El carro de marca ".concat(this.marca, " esta acelerando"));
    };
    Carro.prototype.frenar = function () {
        console.log("El carro de marca ".concat(this.marca, " esta frenando"));
    };
    return Carro;
}());
var carro = new Carro("Chevrolet", "rojo");
console.log(carro.color);
console.log(carro.acelerar());
console.log(carro.frenar());
