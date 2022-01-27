var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Padre2 = /** @class */ (function () {
    function Padre2(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Padre2.prototype.getNombreCompleto = function () {
        return "".concat(this.nombre, " ").concat(this.apellido);
    };
    return Padre2;
}());
var Hijo2 = /** @class */ (function (_super) {
    __extends(Hijo2, _super);
    function Hijo2(nombre, apellido, edad) {
        var _this = _super.call(this, nombre, apellido) || this;
        _this.edad = edad;
        return _this;
    }
    Hijo2.prototype.mostrarNombreHijo = function () {
        console.log("Nombre completo es: ".concat(this.nombre));
    };
    return Hijo2;
}(Padre2));
var hijo2 = new Hijo2("Jonathan Yael", "Antonio", 2);
console.log(hijo2.mostrarNombreHijo());
