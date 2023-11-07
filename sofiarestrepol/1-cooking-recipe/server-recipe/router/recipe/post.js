const postRecipe = (req, res) => {
  res.send({ mensaje: 'actualicé receta', recipe });
};

module.exports = { postRecipe };
