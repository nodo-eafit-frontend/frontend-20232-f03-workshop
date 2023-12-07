const fs = require('fs');
require('dotenv').config();
const { RECIPE_PATH } = process.env;

const updateRecipe = (req, res) => {
    const {id: idrecipe } = req;

    fs.readFile(RECIPE_PATH, (err, data) => {
        if (err) {
            const msgError ='Error reading file: ' + err;
            console.error(msgError);
            res.status(400).send(msgError);
        } else {
            const recipes = JSON.parse(data);

            const recipe = recipes.find((recipe) => recipe.id === idrecipe);

            console.log(recipe);

            res.status(200).send(recipe)
        }
    });
};

module.exports = { updateRecipe };
