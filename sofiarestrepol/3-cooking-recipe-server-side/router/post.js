require("dotenv").config();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// const { RECIPE_PATH } = process.env;


//PUBLISH - ADD

const publishRecipe = (req, res) => {

  const { body: newRecipe } = req; // aka const newRecipe =  body 

  fs.readFile("./database/recipes.json", (err, data) => {
    if (err) {
      const msgError = "Error reading file: " + err; //crea mensaje de error y envia el error encontrado
      console.error(msgError); 
      res.status(400).send(msgError); //duda: por que se imprime el codigo en console.log y luego se envia en res.send ? 
    } else {
      const recipes = JSON.parse(data);
      newRecipe.id = uuidv4();
      recipes.push(newRecipe);
      // res.status(201).send(newRecipe);

      // fs.writeFile("./database/recipes.json", JSON.stringify(recipes), (err) => {
      //   if (err) {
      //     const msgError = "Error writing file: " + err;
      //     console.error(msgError);
      //     res.status(400).send(msgError);
      //   }
      //   res.status(201).send(newRecipe);
      // });
    }
  })
}



//   res.status(200).send({
//     message: 'recipe published'
//   })
//   console.log("published recipe");
// }

module.exports = { publishRecipe }






