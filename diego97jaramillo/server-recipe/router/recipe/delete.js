
const deleteRecipe = (req, res) => {
    console.log({ mensaje: 'elimine una receta'});
    res.send({ mensaje: 'elimine una receta'});
};

module.exports = { deleteRecipe };
