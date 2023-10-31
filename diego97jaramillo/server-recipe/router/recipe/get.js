const fs = require('fs');
require('dotenv').config();
const { RECIPE_PATH } = process.env;


const getRecipe = (req, res) => {
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

module.exports = { getRecipe };
