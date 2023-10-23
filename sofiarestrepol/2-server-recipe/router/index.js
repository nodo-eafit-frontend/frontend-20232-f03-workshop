const express = require("express"); //importar express
const router = express.Router();

const { getRecipe } = require("./recipe/get");
const { putRecipe } = require("./recipe/put");
const { postRecipe } = require("./recipe/post");
const { deleteRecipe } = require("./recipe/delete");


router.get("/recipe", getRecipe); 

router.put("/recipe", putRecipe); //add

router.post("/recipe", postRecipe); //update

router.delete("/recipe", deleteRecipe);

module.exports = router; //exportar el router


//duda: por que M no le pone el mismo nombre que el API? ex - pone removeRecipe en vez de deleteRecipe, y update en vez de post