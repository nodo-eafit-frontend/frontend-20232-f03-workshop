const fs = require('fs');
require('dotenv').config();
const { RECIPE_PATH } = process.env;

const deleteRecipe = (req, res) => {


     fs.readFile(RECIPE_PATH, (err, data) => {
        if (err) {
            const msgError ='Error reading file: ' + err;
            console.error(msgError);
            res.status(400).send(msgError);
        } else {
            const recipes = JSON.parse(data);

            const recipeToDelete = recipes.find((item) => idRecipe === item.id);

            res.send(json.stringify(recipeToDelete));
        }
    });
};

module.exports = { deleteRecipe };
