const express = require('express'); //importa express
const app = express(); // crear un middleware para poder parse el json

require('dotenv').config(); //importa dotenv para usar .env
const PORT = process.env.PORT; //llama al puerto del .env

// const router = require("./router"); //import router 
const router = express.Router(); //crear un router




app.use(express.json()); //aplicar el middleware
//no usamos json reader porque express tiene parse incluido


//GET RECIPE
// router.get('/recipe', getRecipes);
// router.get('/recipe/:id', getRecipe);

router.get("/recipe", (req, res) => {  //recipe es la ruta. (req, res) es el handler
  res.status(200).send({ //primero se manda un estado para determinar si success o failure
    recipe: 'hello' //y luego se manda la info que pidio 
  })
})



//POST RECIPE (AGREGAR)
// router.post("/recipe", postRecipe);

router.post("/recipe/:id", (req,res) => {
  const {id} = req.params; //obtiene el id de la receta, contenido en los parametros del request
  const {title} = req.body; //obtiene el titulo de la receta, contenido en el body del request

  if (!title) { //si no hay titulo, mandar estado de 400 y mandar error message
    return res.status(400).send({error: 'title is required'})
  }

  res.send({ //si hay un titulo, mandar recipe
    recipe: `u can do it because the id is ${id} and the title is ${title}`
  })

})

//PUT RECIPE (ACTUALIZAR)
// router.put("/recipe", putRecipe);

router.put("/recipe", (req, res) => {

});

//DELETE RECIPE

// const deleteRecipe = (req, res) => {
//   res.send({mensaje: "eliminé receta", recipe});
// };

router.delete("/recipe", (req, res) => {

});

// module.exports = {deleteRecipe};

app.use(router);

//LISTEN
app.listen(
  PORT, () => console.log(`running on http://localhost:${PORT}`)
)