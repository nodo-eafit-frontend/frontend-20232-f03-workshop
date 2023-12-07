console.log("Empiezan bucles");

const nombres = [
  {
    nombre: "Carlos",
    edad: 30,
  },
  {
    nombre: "Ana",
    edad: 25,
  },
  {
    nombre: "Miguel",
    edad: 28,
  },
  {
    nombre: "Laura",
    edad: 32,
  },
  {
    nombre: "Javier",
    edad: 22,
  },
  {
    nombre: "Isabel",
    edad: 35,
  },
  {
    nombre: "Luis",
    edad: 40,
  },
  {
    nombre: "Maria",
    edad: 27,
  },
  {
    nombre: "David",
    edad: 31,
  },
  {
    nombre: "Elena",
    edad: 29,
  },
];

const saludarUnoAUno = (nombres) => {
    let i = 0;
    while (i < nombres.length) {
        console.log(`Hola ${nombres[i].nombre}, tienes ${nombres[i].edad} años.`);
        i = i + 1; // O puedes usar i++
    }
};

const buscarPersona = (nombres, nombre) => {
    let i = 0;
    let encontrado = false;
    while (i < nombres.length && !encontrado) {
        if (nombres[i].nombre === nombre) {
            encontrado = true;
        }
        i++;
    }

    return encontrado;
}

// saludarUnoAUno(nombres);
const persona = "Elena";
const encontrado = buscarPersona(nombres, persona);

if (encontrado) {
    saludarUnoAUno(nombres);
} else {
    console.log("La persona no fue encontrada en la lista.");
}
