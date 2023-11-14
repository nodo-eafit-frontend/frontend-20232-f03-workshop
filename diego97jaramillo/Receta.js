var cadena = 'Receta de pollo Adobado';
var ingredientes = ['500gr de pollo', '50gr de mostaza', '60 gr de pimienta'];

var COSTO = {
    BAJO: 'baratisimo',
    MEDIO: 'normalito',
    ALTO: 'cariñoso'
}

var NIVEL = {
    BAJO: 'suavecito',
    MEDIO: 'normalito',
    ALTO: 'complicadito'
}

var minPersonas = 2;
var maxPersonas = 6;
var duracion = 14; //14 mins
var costo = COSTO.MEDIO;
var dificultad = NIVEL.BAJO;

var pasoApaso = {
    paso1: 'picar el pollo',
    paso2: 'mezclar la mostaza con la pimienta',
    paso3: 'huntar el pollo con la salsa',
    paso4: 'cocinar el pollo durante 7 mins por lado',
    tip: 'no dejar cocinar más de 14 mins el pollo'
};


console.log(cadena);
console.log(ingredientes);
console.log(pasoApaso);
