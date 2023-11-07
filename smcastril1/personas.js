// generar edad aleatoria entre 20 y 40 años
const generarEdadAleatoria = () => {return Math.floor(Math.random() * 21) + 20 };
//nos da un decimal aleatorio, que multiplicado por 21 nos da un nb entre 0 y 20, y luego le suma 40 a ese numero

//lista de personas con edades y nombres aleatorios
const nombres = [
  "Andres", "Daniel", "Sofia", "Laura", "Maria", "Estefania", "Diego"
];

const generarPersonas = (nombres) => {
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


const personas = generarPersonas(nombres);

module.exports = personas;