const fs = require('fs'); //se importa la funcion fs de node_modules
require('dotenv').config(); //importar environment
const RECIPE_PATH = process.env.RECIPE_PATH; //llamar la variable del environment


const getRecipes = (req, res) => {
  
  fs.readFile("./database/recipes.json", (err, data) => {
    if (err) {
      const msgError = "Error reading file: " + err; //crea mensaje de error y envia el error encontrado
      console.error(msgError); 
      res.status(400).send(msgError); //duda: por que se imprime el codigo en console.log y luego se envia en res.send ? 
    } else {
      const recipes = JSON.parse(data); //convierte la data en un objeto y lo stock en la var recipes
      res.status(200).send(recipes) //primero se manda un estado para determinar si success o failure y luego se manda la info que pidio 
    }
  })
}

module.exports = {getRecipes}

//todo: intentar agregar RECIPE_PATH en vez del path - me sale error - has to be string, got undefined  

