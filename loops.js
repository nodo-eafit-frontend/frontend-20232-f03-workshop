const { rmSync } = require("fs");

const personas = [
  {
    nombre: "Sofia",
    edad: 27
  },
  {
    nombre: "Carlos",
    edad: 22
  },
  {
    nombre: "Ana",
    edad: 37
  },
  {
    nombre: "Daniel",
    edad: 40
  },
];

const saludar = (nombres) => {
  let i = 0; //contador
  while(i < nombres.length) {
    console.log(`hola ${nombres[i]}`);
    i++;
  }
} ;
// saludar(nombres);

const buscarPersona = (persona, personas) => {
  let i = 0;
  let resultado = {
    encontrado: false,
    posicion: 0,
    // existe: "",
  };
  
  while (i < personas.length) {
    if (personas[i] === persona.nombre) {
      resultado.encontrado = true;
      resultado.posicion = i;
      // resultado.existe = "si esta en la lista"
      break; //para detener el loop
    }
    // else {
    //   // resultado.existe = "no esta en la lista"
    // }
    i++;
  }
  return persona, resultado;
};

const persona = "Maria";
const resultado = buscarPersona(personas, persona);
console.log(resultado, persona);



