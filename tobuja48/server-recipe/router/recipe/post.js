const updateRecipes = (req, res) => {

    //operacion con la base de datos
    
    res.send({mensaje:"actualizar receta", recipe});
}



module.exports = {updateRecipes};