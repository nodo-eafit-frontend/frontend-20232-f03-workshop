
app.post("/recipe/:id", (req,res) => {
  const {id} = req.params; //obtiene el id de la receta, contenido en los parametros del request
  const {title} = req.body; //obtiene el titulo de la receta, contenido en el body del request

  if (!title) { //si no hay titulo, mandar estado de 400 y mandar error message
    return res.status(400).send({error: 'title is required'})
  }

  res.send({ //si hay un titulo, mandar recipe
    recipe: `u can do it because the id is ${id} and the title is ${title}`
  })

})