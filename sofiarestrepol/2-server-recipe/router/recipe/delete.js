const deleteRecipe = (req, res) => {
  res.send({mensaje: "eliminé receta", recipe});
};

module.exports = {deleteRecipe};