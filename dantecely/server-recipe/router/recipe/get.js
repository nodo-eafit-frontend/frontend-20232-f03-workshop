require("dotenv").config();
const fs = require("fs");
const { RECIPE_PATH } = process.env;

const getRecipes = (req, res) => {
  // Operaciones con la base de datos
  fs.readFile(RECIPE_PATH, (err, data) => {
    if (err) {
      const msgError = "Error reading file: " + err;
      console.error(msgError);
      res.status(400).send(msgError);
    } else {
      const recipes = JSON.parse(data);

      res.status(200).send(recipes);
    }
  });
};

module.exports = { getRecipes };
