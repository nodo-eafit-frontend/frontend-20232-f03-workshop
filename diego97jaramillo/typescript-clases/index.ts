/* function Vehiculo (marca) {
    return  "hola soy un " + marca;
};

const mensaje1 = Vehiculo('Ferrari');
console.log(mensaje1); */

const concesionario: vehicles[] = [];

class vehicles {
    private marca: string;
    private color: string;
    private precio: number;
    private ruedas: number;

    constructor(marca: string, color: string) {
        this.marca = marca;
        this.color = color;
    }
    presentarse() {
        return `Hola soy un ${this.marca} de color ${this.color}`
    }
    get laMarca() {
        return this.marca;
    }
    get elColor() {
        return this.color;
    }
    set laMarca (marca: string) {
        this.marca = marca;
    }
    set elColor (color: string) {
        this.color = color;
    }
}

class carro extends vehicles {
    private puertas: number;
    constructor(marca: string, color: string, puertas: number) {
        super(marca, color);
        this.puertas = puertas;
    };

    presentarse(): string {
        return `Hola soy un ${this.laMarca} de color ${this.elColor} con ${this.puertas} puertas`
    }
}

class moto extends vehicles {
    private cadenas: string;
    constructor(marca: string, color: string, cadenas: string) {
        super(marca, color);
        this.cadenas = cadenas;
    };

    presentarse(): string {
        return `Hola soy una ${this.laMarca} de color ${this.elColor} con cadena de marca ${this.cadenas}`
    }
}

const miCarro = new carro('amarok', 'plata', 5);
const miCarro1 = new carro('golf', 'dorado', 3);
const miCarro2 = new carro('twingo', 'azul', 5);
const mimoto = new moto('suzuki', 'amarillo', 'shark');

console.log(mimoto.presentarse());



concesionario.push(miCarro, miCarro1,  miCarro2, mimoto);
console.log(concesionario);


/*
const vehiculo = new vehicles('mazda', 'blue');
console.log(vehiculo.laMarca);
vehiculo.elColor = "golden";
console.log(vehiculo.elColor); */

