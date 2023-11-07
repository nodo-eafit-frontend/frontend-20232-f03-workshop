app.get("/recipe", (req, res) => {  //recipe es la ruta. (req, res) es el handler
  res.status(200).send({ //primero se manda un estado para determinar si success o failure
    recipe: 'hello' //y luego se manda la info que pidio 
  })
})