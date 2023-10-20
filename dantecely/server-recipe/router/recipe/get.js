const recipe = {
  title: "Delicious Pasta Carbonara",
  peopleAmount: {
    max: 4,
    min: 2,
  },
  time: 30, // en minutos
  cost: "$$", // Escala de costo: $ (barato), $$ (moderado), $$$ (caro)
  level: "Fácil", // Niveles: Fácil, Intermedio, Difícil
  steps: [
    "Hierve agua y agrega sal.",
    "Añade la pasta y cocina hasta que esté al dente.",
    "En una sartén, saltea el tocino hasta que esté crujiente.",
    "Agrega ajo picado y cocina hasta que esté fragante.",
    "Bate los huevos con queso parmesano en un tazón aparte.",
    "Escurre la pasta y agrégala a la sartén con el tocino.",
    "Agrega la mezcla de huevo y queso, revuelve rápidamente para evitar que los huevos se cuajen demasiado.",
    "Añade pimienta negra molida al gusto.",
    "Sirve caliente y disfruta de tu deliciosa Pasta Carbonara.",
  ],
};

const getRecipes = (req, res) => {
  // Operaciones con la base de datos

  res.send({ mensaje: "Soy una receta :)", recipe });
};

module.exports = { getRecipes };
