const fs = require('fs');
require('dotenv').config();
const { RECIPE_PATH } = process.env;

const deleteRecipe = (req, res) => {

    const idRecipe = req.params.id;

     fs.readFile(RECIPE_PATH, (err, data) => {
        if (err) {
            const msgError ='Error reading file: ' + err;
            console.error(msgError);
            res.status(400).send(msgError);
        } else {
            const recipes = JSON.parse(data);

            const recipeToDelete = recipes.findIndex((recipes) => idRecipe === recipes.id);

            recipes.splice(recipeToDelete,1);

            fs.writeFile(RECIPE_PATH, JSON.stringify(recipes), (err) => {
                if (err) {
                  const msgError = "Error writing file: " + err;
                  console.error(msgError);
                  res.status(400).send(msgError);
                };
            });

            res.status(200).send(`se borró ${recipeToDelete}`);
        };
    });
};

module.exports = { deleteRecipe };
