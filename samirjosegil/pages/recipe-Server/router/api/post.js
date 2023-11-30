const fs = require('fs');
const path = require('path');

const createRecipe = (req, res) => {
  const filePath = path.join(__dirname, process.env.RECIPE_PATH);
  const data = JSON.parse(fs.readFileSync(filePath));
  data.push(req.body)

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.status(200).send(req.body);
  };

  module.exports = { createRecipe };      