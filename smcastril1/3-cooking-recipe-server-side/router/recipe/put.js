require("dotenv").config();
const fs = require("fs");
const my_json = require("../../utils/json_manager");
const { RECIPE_PATH } = process.env;

//callback
const add_recipe = (req, res) => {
  const my_body = req.body;
  console.log(my_body);
  const data = my_json.json_reader(RECIPE_PATH);
  if (data.error) {
    res.send(data.error);
  } else {
    console.log(my_body);
    data.push(my_body);
    my_json.json_writer(RECIPE_PATH, data);

    res.status(201).send(my_body);
    console.log(data);
  }
};

module.exports = { add_recipe };
