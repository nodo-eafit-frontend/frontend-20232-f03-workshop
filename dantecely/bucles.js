// import personas from "./personas";
const personas = require("./personas");

console.log("Empiezan Bucles");

const saludarUnoAUno = (nombres) => {
  let i = 0;
  while (i < nombres.length) {
    console.log(
      "Hola " + nombres[i].nombre + " tienes " + nombres[i].edad + " años"
    );
    i = i + 2;
  }
};

const buscarPersona = (nombres, nombre) => {
  let i = 0;
  let resultado = {
    encontrado: false,
    posicion: -1,
  };

  while (i < nombres.length) {
    if (nombres[i].nombre === nombre) {
      resultado.encontrado = true;
      resultado.posicion = i;
      break;
    }
    i++;
  }

  return resultado;
};

const filtrarPorEdad = (personas, minEdad, maxEdad) => {
  const personasFiltradas = [];

  for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];

    if (persona.edad >= minEdad && persona.edad <= maxEdad) {
      personasFiltradas.push(persona);
    }
  }

  return personasFiltradas;
};

// saludarUnoAUno(personas);
// const persona = "María";
// const resultado = buscarPersona(personas, persona);
// console.log(resultado, persona);

const candidatos = filtrarPorEdad(personas, 25, 35);

console.log({ candidatos, cuantos: candidatos.length });
