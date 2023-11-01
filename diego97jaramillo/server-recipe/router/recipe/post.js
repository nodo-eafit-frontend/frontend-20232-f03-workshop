const addRecipe = (req, res) => {

    console.log({mensaje: 'agregue una receta'});
    res.send({mensaje: 'agregue una receta'});
};


module.exports = { addRecipe };
