require("dotenv").config();
const fs = require("fs"); //importa el modulo file system para trabajar con archivos

const recipe = { 
  title: "Carbonara", 
  portions: 2,
  time: 120,
  level: "Medio",
  pasos: "xxx",
}; 

const { RECIPE_PATH } = process.env; //extrae la variable de .env

const getRecipes = (req, res) => {
  // Operaciones con la base de datos
  fs.readFile("./database/recipes.json", (err, data) => { 
    if (err) {
      const msgError = "Error reading file: " + err;
      console.error(msgError);
      res.status(400).send(msgError);
    } else { //si no hay error, analiza el json y lo guarda en recipes
      const recipes = JSON.parse(data);

  res.send({ mensaje: "Soy una receta :)", recipe });
      res.status(200).send(recipes);
    }
  });
};

module.exports = {getRecipe}; //exporta la funcion
//duda: para que sirven los {} en estos casos?