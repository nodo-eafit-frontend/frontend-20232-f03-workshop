const fs = require("fs");

const getRecipes = (req, res) => {
  // Operaciones con la base de datos
  fs.readFile("./database/recipes.json", (err, data) => {
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
