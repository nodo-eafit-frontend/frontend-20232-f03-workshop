const express = require('express'); //importar express
const router = express.Router();

//importar APIs
const { getRecipes, getRecipe } = require('./recipe/get');
const { putRecipe } = require('./recipe/put');
const { postRecipe } = require('./recipe/post');
const { deleteRecipe } = require('./recipe/delete');

router.get('/recipe', getRecipes);
router.get('/recipe/:id', getRecipe);

router.put('/recipe', putRecipe); //add

router.post('/recipe', postRecipe); //update

router.delete('/recipe', deleteRecipe);

module.exports = router; //exportar el router
