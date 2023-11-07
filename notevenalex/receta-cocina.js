// Global variables
var COSTOS = {
    BAJO: 'low',
    MEDIO: 'normal',
    ALTO: 'high',
};
var NIVEL = {
    BAJO: 'easy',
    MEDIO: 'normal',
    ALTO: 'hard',
};

// Mi receta
var titulo = "Tosta de espárragos gratinados con mayonesa";

var minPersonas = 1;
var maxPersonas = 2;
var duración = 30; // 30 minutes
var costo = COSTOS.BAJO;
var nivel = NIVEL.BAJO;

var ingrediente1 = '1 bote de espárragos blancos';
var ingrediente2 = '1 bolsa de queso rallado mozzarella para pizzas';
var ingrediente3 = '1 bote de mayonesa';
var ingrediente4 = '2 rebanadas de pan';

var ingredientes = [ingrediente1, ingrediente2, ingrediente3, ingrediente4];

var Pasoapaso = {
    paso1: 'Ponemos las rebanadas de pan, previamente untadas con mayonesa, en una placa de horno.',
    paso2: 'Colocamos encima de cada rebanada tres espárragos y sobre ellos dos cucharadas de mayonesa.',
    paso3: 'Añadimos un poco de queso mozzarella rallado.',
    paso4: 'Introducimos la bandeja en el horno precalentado a 180° y gratinamos hasta que se dore la mayonesa con queso.',
    recomendación1: 'Para darle un toque especial podemos además espolvorear, sobre la mayonesa con el queso, alguna hierba aromática como orégano o tu preferida.',
};

console.log(ingredientes, typeof ingredientes);
console.log(Pasoapaso, typeof Pasoapaso)

