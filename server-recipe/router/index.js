const express = require("express");
const router = express.Router();
const { getRecipes } = require("./recipe/Get");
const { updagetRecipes} = require("./recipe/post");
const { addgetRecipes } = require("./recipe/put");
const { removegetRecipes } = require("./recipe/delete");

router.get( "/recipe", getRecipes);

router.post( "/recipe", updagetRecipes);

router.put("/recipe", addgetRecipes);

router.delete( "/recipe", removegetRecipes);


module.exports = router;
