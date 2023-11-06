var comida = "Atun Encebollado";

var costo = {
    alto: "costoso",
    medio: "accesible para ciertas personas",
    bajo: "la mayoria de personas lo pueden hacer",
};

var nivel = {
    alto: "requiere experiencia",
    medio: "conocimientos basicos",
    bajo: "conocimiento minimos",
};

var minpersonas = 7;
var maxpersonas = 10;
var duracion = 50; //50 minutos
var costo = costo.alto;
var nivel = nivel.alto;

var ingrediente1 = "2 cebollas";
var ingrediente2 = "2 dientes de ajo";
var ingrediente3 = "800g de atun";
var ingrediente4 = "vino tinto";
var ingrediente5 = "aceite de oliva";
var ingrediente6 = "pimienta y sal al gusto"
var ingredientes = [ingrediente1, ingrediente2, ingrediente3, ingrediente4,ingrediente5,
     ingrediente6];

var pasoAPaso = {
    paso1: "Pelar y picar las cebollas y el ajo",
    paso2: "Cocinar las cebollas y el ajo",
    paso3: "Cocinar el atún",
    paso4: "Deglasear con vino tinto",
    paso5: "Condimentar y servir",
    recomendacion1: "Agrega un toque de cítricos como limón al atún antes de servir",
    recomendacion2: "Acompaña el Atún Encebollado con verduras asadas",
    recomendacion3: "Experimenta con diferentes tipos de vino tinto al marinar el atún",
};

console.log(costo);
console.log(nivel);
console.log(duracion);
console.log(minpersonas);
console.log(maxpersonas);
console.log(ingredientes, typeof ingredientes);
console.log(pasoAPaso, typeof pasoAPaso);
