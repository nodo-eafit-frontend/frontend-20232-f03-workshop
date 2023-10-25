require("dotenv").config();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const { RECIPE_PATH } = process.env;

const addRecipe = (req, res) => {
  const { body: newRecipe } = req;

  fs.readFile(RECIPE_PATH, (err, data) => {
    if (err) {
      const msgError = "Error reading file: " + err;
      console.error(msgError);
      res.status(400).send(msgError);
    } else {
      const recipes = JSON.parse(data);

      newRecipe.id = uuidv4();

      recipes.push(newRecipe);

      fs.writeFile(RECIPE_PATH, JSON.stringify(recipes), (err) => {
        if (err) {
          const msgError = "Error writing file: " + err;
          console.error(msgError);
          res.status(400).send(msgError);
        }

        res.status(201).send(newRecipe);
      });
    }
  });
};

module.exports = { addRecipe };
