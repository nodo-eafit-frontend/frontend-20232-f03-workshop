require('dotenv').config();

const fs = require("fs");

const { RECIPE_PATH } = process.env;

const getRecipes = (req, res) => {
    fs.readFile(RECIPE_PATH, (err, data) => {
        if (err) {
            return callback && callback(err);
        } 
        else {
            const recipes = JSON.parse(data);
            res.status(200).send(recipes);
        }
    }); 
}

module.exports = { getRecipes };

