const recipe = { 
  title: "Carbonara", 
  portions: 2,
  time: 120,
  level: "Medio",
  pasos: "xxx",
}; 

const getRecipe = (req, res) => {
  res.send({mensaje: "soy receta", recipe});
}
module.exports = {getRecipe}; //duda: para que sirven los {} en estos casos?