require("dotenv").config();
const fs = require("fs");
const my_json = require("../../utils/json_manager");
const { RECIPE_PATH } = process.env;

//callback
const get_recipe = (req, res) => {
  const data = my_json.json_reader(RECIPE_PATH);
  if (data.error) {
    res.send(data.error);
  } else {
    res.status(200).send(data);
  }
};

//callback
const get_recipe_by_id = (req, res) => {
  const id_recipe = req.params.id;
  const data = my_json.json_reader(RECIPE_PATH);
  const recipe = data.find((recipe) => {
    return recipe.id === id_recipe;
  });

  if (recipe) {
    res.status(200).send(recipe);
  } else {
    const msg_not_found = "Recipe not found";
    console.error(msg_not_found);
    res.status(404).send(msg_not_found);
  }
};

module.exports = { get_recipe, get_recipe_by_id };
