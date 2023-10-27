// Global variables
var COSTO = {
BAJO: 'baratito',
MEDIO: 'nomalito',
ALTO: 'carisimo',
};
var NIVEL = {
BAJO: 'facilito',
MEDIO: 'moderadito',
ALTO: 'altico',
};

// Mi receta
var titulo = 'Helado de Sandia';

var candidadPersonas = { 
min: 6,
max: 12,
};

var duracion = 60; // 60 seconds
var costo = COSTO.BAJO;
var nivel = NIVEL.MEDIO;

var ingredientes = {
ingrediente1: '1/2 kg de sabdua sub oeoitas cortadas en trozos congelada',
ingrediente2: '2 yogurt naturales MAS',
ingrediente3: '2 cucharadas de azucar',
ingrediente4: 'Pepitas de chocolate',
};

var pasoPaso = {
Paso1: 'En una batidora ponemos los dos yogures, el azucar y los trozos de sandia previamente congelada',
Paso2: 'Batimos muy buen',
Paso3: 'Volcamos la mezcla en un recipiente mas bien plano y la congelamos',
Paso4: 'Es muy  impostante que, a mitad del proceso de congelacion, saquemos el recipiente y removamos el contenido con una cuchara',
Paso5: 'Volvemos a congelar',
Paso6: 'una vez congelada la mezcla del todo, para servirlo nos ayudamos de una cuchara mojada en agua y podemos decorar el helado con unas pepitas de chocolate que simularian las pepitas de la sandia',
};

console.log(titulo);
console.log(ingredientes);
console.log(pasoPaso);
