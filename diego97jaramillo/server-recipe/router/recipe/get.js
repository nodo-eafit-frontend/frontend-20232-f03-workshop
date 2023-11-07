const fs = require('fs');
require('dotenv').config();
const { RECIPE_PATH } = process.env;


const getRecipes = (req, res) => {
    fs.readFile(RECIPE_PATH, (err, data) => {
        if (err) {
            const msgError ='Error reading file: ' + err;
            console.error(msgError);
            res.status(400).send(msgError);
        } else {
            const recipes = JSON.parse(data);

            res.status(200).send(recipes)
        }
    })
};

const getRecipe = (req, res) => {
    const idRecipe = req.params.id;
    fs.readFile(RECIPE_PATH, (err, data) => {
        if (err) {
            const msgError ='Error reading file: ' + err;
            console.error(msgError);
            res.status(400).send(msgError);
        } else {
            const recipes = JSON.parse(data);

            const recipe = recipes.find((recipe) => recipe.id === idRecipe);

            res.status(200).send(recipe)
        }
    })
};

module.exports = { getRecipes, getRecipe };
