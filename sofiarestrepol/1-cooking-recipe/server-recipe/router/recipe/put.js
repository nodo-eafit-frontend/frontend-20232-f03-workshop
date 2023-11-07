const putRecipe = (req, res) => {
  res.send({mensaje: "agregué receta", recipe});
};

module.exports = {putRecipe};