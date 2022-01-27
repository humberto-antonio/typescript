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
var Padre = /** @class */ (function () {
    function Padre(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Padre.prototype.getNombreCompleto = function () {
        return "".concat(this.nombre, " ").concat(this.apellido);
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(nombre, apellido, edad) {
        var _this = _super.call(this, nombre, apellido) || this;
        _this.edad = edad;
        return _this;
    }
    Hijo.prototype.mostrarNombreHijo = function () {
        console.log("Nombre completo es: ".concat(this.getNombreCompleto()));
    };
    return Hijo;
}(Padre));
var hijo = new Hijo("Jonathan Yael", "Antonio", 2);
console.log(hijo.mostrarNombreHijo());
