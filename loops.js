const personas = require("./personas");

console.log("hi loops");

// const { rmSync } = require("fs");

// funcion para saludar a personas
const saludar = (nombres) => {
  // let i = 0; //contador
  // while (i < nombres.length) {
  //   console.log(`hola ${nombres[i].nombre}, tienes ${nombres[i].edad} años`);
  //   i++;
  // }

  nombres.forEach((persona, index) => {
    console.log(`hola ${persona.nombre}, tienes ${persona.edad} años`);
  }); //esto es el callback
};


//funcion para buscar personas
const buscarPersona = (personas, nombre) => {
  // let i = 0;
  // let resultado = {
  //   encontrado: false,
  //   posicion: 0,
  //   // existe: "",
  // };
  
  // while (i < personas.length) {
  //   if (personas[i] === persona.nombre) {
  //     resultado.encontrado = true;
  //     resultado.posicion = i;
  //     // resultado.existe = "si esta en la lista"
  //     break; //para detener el loop
  //   }
  //   // else {
  //   //   // resultado.existe = "no esta en la lista"
  //   // }
  //   i++;
  // }
  // return persona, resultado;

  const personaEncontrada = persona.find((persona) => {
    return persona.nombre === nombre;
  })
  
  return personaEncontrada
};

//funcion para filtrar por edad min y max
const filtrarPorEdad = (personas, minEdad, maxEdad) => {
  // const personasFiltradas = [];
  // for (let i=0; i < personas.length; i++) {
  //   const persona = personas[i] //para acceder diractamente al indice

  //   if (persona.edad <= minEdad && persona.edad >= maxEdad ) {
  //     personasFiltradas.push(persona);
  //   }
  // }
  // return personasFiltradas

  const personasFiltradas = persona.filter((x) => {
    return persona.edad <= minEdad && persona.edad >= maxEdad
  }) 
  return personasFiltradas
}


// si la edad de la persona esta entre minEdad y maxEdad 
// then push esa persona a la lista vacia de personasFiltradas





//ejecutar 

// saludar(personas);
// const resultado = buscarPersona(personas, persona);
// console.log(resultado, persona);


const candidatos = filtrarPorEdad(personas, 23, 30);
console.log(candidatos);
console.log(personas);



