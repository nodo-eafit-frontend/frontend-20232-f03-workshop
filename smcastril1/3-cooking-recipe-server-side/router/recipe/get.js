require("dotenv").config();
const fs = require("fs");
const { RECIPE_PATH } = process.env;

//callback
const get_recipe = (req, res) => {
  fs.readFile(RECIPE_PATH, (err, data) => {
    if (err) {
      const msg_error = "Error reading the file: " + err;
      console.console.error(msg_error);
      res.status(400).send(msg_error);
    } else {
      const my_recipe = JSON.parse(data); // Lo convierte a un objeto
      res.status(200).send(my_recipe);
    }
  });

  // res.send({"mensaje":"I am a recipe :)", recipe});
};

//callback
const get_recipe_by_id = (req, res) => {
  const id_recipe = req.params.id;
  fs.readFile(RECIPE_PATH, (err, data) => {
    if (err) {
      const msg_error = "Error reading the file: " + err;
      console.console.error(msg_error);
      res.status(400).send(msg_error);
    } else {
      const recipes = JSON.parse(data);
      const recipe = recipes.find((recipe) => {
        return recipe.id === id_recipe;
      });
      if (recipe) {
        res.status(200).send(recipe);
      } else {
        const msg_not_found = "Recipe not found";
        console.error(msg_not_found);
        res.status(404).send(msg_not_found);
      }
    }
  });
};

module.exports = { get_recipe, get_recipe_by_id };
