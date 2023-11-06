// console.log('Hola Mundo con Typescript');
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
// function vehiculoFN(marcas: string): string {
//   return 'Hola soy un ' + marcas;
// }
// const result = vehiculoFN('Renault');
// const vehiculoObj = {
//   marca: 'Ferrari',
//   color: 'red',
//   presentarse: function () {
//     return `Este es un ${this.marca} de color ${this.color}`;
//   },
// };
// vehiculoObj.marca = 'Mazda';
// console.log(vehiculoObj);
var concecionario = [];
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, color) {
        this.marca = marca;
        this.color = color;
    }
    Vehiculo.prototype.presentarse = function () {
        return "La super marca ".concat(this.marca, " con el color ").concat(this.color, ", fant\u00E1stico!");
    };
    Object.defineProperty(Vehiculo.prototype, "miMarca", {
        get: function () {
            return this.marca;
        },
        set: function (marca) {
            this.marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Vehiculo.prototype.getColor = function () {
        return this.color;
    };
    Vehiculo.prototype.setColor = function (color) {
        this.color = color;
    };
    return Vehiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(marca, color, puertas) {
        var _this = _super.call(this, marca, color) || this;
        _this.puertas = puertas;
        return _this;
    }
    Carro.prototype.presentarse = function () {
        return "Este es un ".concat(this.miMarca, " de color ").concat(_super.prototype.getColor.call(this), " con ").concat(this.puertas, " puertas");
    };
    return Carro;
}(Vehiculo));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, color, tipoCadena) {
        var _this = _super.call(this, marca, color) || this;
        _this.tipoCadena = tipoCadena;
        return _this;
    }
    Moto.prototype.presentarse = function () {
        return "Este es un ".concat(this.miMarca, " de color ").concat(_super.prototype.getColor.call(this), " con nuevas cadenas tipo ").concat(this.tipoCadena);
    };
    return Moto;
}(Vehiculo));
var miCarro = new Carro('Renault', 'gris', 4);
var miCarro2 = new Carro('Ferrari', 'rojo', 2);
var miCarro3 = new Carro('Hyundai', 'verde', 4);
var miMoto = new Moto('Yamaha', 'negra', 'fortificada');
concecionario.push(miCarro, miCarro2, miCarro3, miMoto);
console.log(concecionario);
