const updateRecipe = (req, res) => {
  // Operaciones con la base de datos
  const body = req.body;

  console.log(body);

  res.send("Actualizar una receta");
};

module.exports = { updateRecipe };
