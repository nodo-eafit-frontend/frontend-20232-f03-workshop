require("dotenv").config();
const fs = require("fs"); //importa el modulo file system para trabajar con archivos
const { RECIPE_PATH } = process.env; //extrae la variable de .env



const getRecipes = (req, res) => {
  // Operaciones con la base de datos
  fs.readFile(RECIPE_PATH, (err, data) => { 
    if (err) {
      const msgError = "Error reading file: " + err;
      console.error(msgError);
      res.status(400).send(msgError);
    } else { //si no hay error, analiza el json y lo guarda en recipes
      const recipes = JSON.parse(data);

  // res.send({ mensaje: "Soy una receta :)", recipe });
      res.status(200).send(recipes);
    }
  });
};

// function getRecipes() {
//   const responsePromise = fetch("http://localhost:3005/recipe");
  
//   const rawPromise = responsePromise.then((raw) => raw.json()); //es la info raw que nos llega. no interpretable. se pasa a json
//   rawPromise.then((data) => {
//     console.log(data);

//     const codeEl = document.querySelector("section code");
//     const dataEl = document.createTextNode(JSON.stringify(data, null, 2));

//     codeEl.appendChild(dataEl);
//   })
// }




const getRecipe = (req,res) => {
  const idRecipe = req.params.id;
  fs.readFile(RECIPE_PATH, (err, data) => { 
    if (err) {
      const msgError = "Error reading file: " + err;
      console.error(msgError);
      res.status(400).send(msgError);
    } else { //si no hay error, analiza el json y lo guarda en recipes
      const recipes = JSON.parse(data);

      const recipe = recipes.find((recipe) => recipe.id === idRecipe) 
      //esto dice, dentro de recipes, encuentra una recipe, que cumpla con la condicion {}

  res.send({ mensaje: "Soy una receta :)", recipe });
      res.status(200).send(recipes);
    }
  });
}


module.exports = {getRecipes}; //exporta la funcion
module.exports = {getRecipe}; 

//duda: para que sirven los {} en estos casos?