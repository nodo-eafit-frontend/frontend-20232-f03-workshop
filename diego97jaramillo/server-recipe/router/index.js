const express = require("express");
const router = express.Router();
const { getRecipes, getRecipe } = require('./recipe/get');
const { updateRecipe } = require('./recipe/put');
const { addRecipe } = require('./recipe/post');
const { deleteRecipe } = require('./recipe/delete');

router.get('/recipe', getRecipes);
router.get('/recipe/:id', getRecipe);

router.post('/recipe', addRecipe);

router.put('/recipe', updateRecipe);

router.delete('/recipe', deleteRecipe);


module.exports = router;
