/* function Vehiculo (marca) {
    return  "hola soy un " + marca;
};

const mensaje1 = Vehiculo('Ferrari');
console.log(mensaje1); */
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
var concesionario = [];
var vehicles = /** @class */ (function () {
    function vehicles(marca, color) {
        this.marca = marca;
        this.color = color;
    }
    vehicles.prototype.presentarse = function () {
        return "Hola soy un ".concat(this.marca, " de color ").concat(this.color);
    };
    Object.defineProperty(vehicles.prototype, "laMarca", {
        get: function () {
            return this.marca;
        },
        set: function (marca) {
            this.marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(vehicles.prototype, "elColor", {
        get: function () {
            return this.color;
        },
        set: function (color) {
            this.color = color;
        },
        enumerable: false,
        configurable: true
    });
    return vehicles;
}());
var carro = /** @class */ (function (_super) {
    __extends(carro, _super);
    function carro(marca, color, puertas) {
        var _this = _super.call(this, marca, color) || this;
        _this.puertas = puertas;
        return _this;
    }
    ;
    carro.prototype.presentarse = function () {
        return "Hola soy un ".concat(this.laMarca, " de color ").concat(this.elColor, " con ").concat(this.puertas, " puertas");
    };
    return carro;
}(vehicles));
var moto = /** @class */ (function (_super) {
    __extends(moto, _super);
    function moto(marca, color, cadenas, nudosPorSeg) {
        var _this = _super.call(this, marca, color) || this;
        _this.cadenas = cadenas;
        _this.nudosPorSeg = nudosPorSeg ? nudosPorSeg : 0;
        return _this;
    }
    ;
    moto.prototype.presentarse = function () {
        return "Hola soy una ".concat(this.laMarca, " de color ").concat(this.elColor, " con cadena de marca ").concat(this.cadenas);
    };
    moto.prototype.mostrarVelocidadMax = function (metros) {
        return this.nudosPorSeg * metros;
    };
    return moto;
}(vehicles));
var miCarro = new carro('amarok', 'plata', 5);
var miCarro1 = new carro('golf', 'dorado', 3);
var miCarro2 = new carro('twingo', 'azul', 5);
var mimoto = new moto('suzuki', 'amarillo', 'shark');
var mimotoAcuatica = new moto('suzuki', 'amarillo', 'shark', 6);
console.log(mimoto.presentarse());
console.log(mimotoAcuatica.mostrarVelocidadMax(10));
concesionario.push(miCarro, miCarro1, miCarro2, mimoto, mimotoAcuatica);
console.log(concesionario);
/*
const vehiculo = new vehicles('mazda', 'blue');
console.log(vehiculo.laMarca);
vehiculo.elColor = "golden";
console.log(vehiculo.elColor); */
