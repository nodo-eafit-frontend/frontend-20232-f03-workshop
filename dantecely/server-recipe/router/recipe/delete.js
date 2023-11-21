const removeRecipes = (req, res) => {
  // Operaciones con la base de datos

  console.log("Eliminé una receta");

  res.send("Eliminé una receta");
};

module.exports = { removeRecipes };
