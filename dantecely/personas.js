// Lista de nombres
const nombres = [
  "Javier",
  "Ana",
  "Carlos",
  "María",
  "Miguel",
  "Laura",
  "David",
  "Elena",
  "Pedro",
  "Sara",
  "Francisco",
  "Lucía",
  "Pablo",
  "Carmen",
  "Alejandro",
  "Isabel",
  "Luis",
  "Patricia",
  "Diego",
  "Raquel",
  "Jorge",
  "Silvia",
  "Andrés",
  "Monica",
  "José",
  "Eva",
  "Daniel",
  "Natalia",
  "Roberto",
  "Cristina",
];

// Función para generar una edad aleatoria entre 20 y 40 años
function generarEdadAleatoria() {
  return Math.floor(Math.random() * 21) + 20; // Números entre 20 y 40 (inclusive)
}

const crearListaPersonas = (nombres) => {
  // Lista de personas con nombres y edades aleatorias
  const personas = [];

  for (let i = 0; i < nombres.length; i++) {
    const persona = {
      nombre: nombres[i],
      edad: generarEdadAleatoria(),
    };

    personas.push(persona);
  }

  return personas;
};

const personas = crearListaPersonas(nombres);

module.exports = personas;
