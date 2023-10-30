//importaciones
const express = require('express'); //importa express
require('dotenv').config(); //importa dotenv para usar .env
const cors = require('cors');  //importa cors
const { getRecipes } = require("./router/get");
const { publishRecipe } = require("./router/post");
const { updateRecipe } = require("./router/put");
const { deleteRecipe } = require("./router/delete");

const PORT = process.env.PORT; //llama al puerto del .env

const app = express(); // crear un middleware para poder parse el json
const router = express.Router(); //crear un router
app.use(cors()); // habilitar cors antes del router !
app.use(router); //habilitar el router
app.use(express.json()); //aplicar el middleware





//GET RECIPE
router.get("/recipe", getRecipes )
// router.get('/recipe/:id', getRecipe);

//POST RECIPE (PUBLISH)
router.post("/recipe", publishRecipe);

//PUT RECIPE (UPDATE)
router.put("/recipe", updateRecipe);

//DELETE RECIPE
router.delete("/recipe", deleteRecipe )


//LISTEN
app.listen(
  PORT, () => console.log(`running on http://localhost:${PORT}`)
  )
  
  
//export
module.exports = router;