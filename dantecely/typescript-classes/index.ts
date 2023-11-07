// console.log('Hola Mundo con Typescript');

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

const concecionario: Vehiculo[] = [];

class Vehiculo {
  private marca: string;
  private color: string;
  private precio: number;
  private ruedas: number;

  constructor(marca: string, color: string) {
    this.marca = marca;
    this.color = color;
  }

  public presentarse() {
    return `La super marca ${this.marca} con el color ${this.color}, fantástico!`;
  }
  get miMarca() {
    return this.marca;
  }
  set miMarca(marca: string) {
    this.marca = marca;
  }
  public getColor() {
    return this.color;
  }
  public setColor(color: string): void {
    this.color = color;
  }
}

class Carro extends Vehiculo {
  private puertas: number;

  constructor(marca: string, color: string, puertas: number) {
    super(marca, color);
    this.puertas = puertas;
  }

  presentarse() {
    return `Este es un ${this.miMarca} de color ${super.getColor()} con ${this.puertas} puertas`;
  }
}

class Moto extends Vehiculo {
  private tipoCadena: string;

  constructor(marca: string, color: string, tipoCadena: string) {
    super(marca, color);
    this.tipoCadena = tipoCadena;
  }

  presentarse() {
    return `Este es un ${this.miMarca} de color ${super.getColor()} con nuevas cadenas tipo ${this.tipoCadena}`;
  }
}

const miCarro = new Carro('Renault', 'gris', 4);
const miCarro2 = new Carro('Ferrari', 'rojo', 2);
const miCarro3 = new Carro('Hyundai', 'verde', 4);
const miMoto = new Moto('Yamaha', 'negra', 'fortificada');

concecionario.push(miCarro, miCarro2, miCarro3, miMoto);

console.log(concecionario);
