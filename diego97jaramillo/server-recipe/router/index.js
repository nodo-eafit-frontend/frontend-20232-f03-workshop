const express = require("express");
const router = express.Router();
const { getRecipe } = require('./recipe/get');
const { createRecipe } = require('./recipe/put');
const { updateRecipe } = require('./recipe/post');
const { deleteRecipe } = require('./recipe/delete');

router.get('/recipe', getRecipe);

router.post('/recipe', updateRecipe);

router.put('/recipe', createRecipe);

router.delete('/recipe', deleteRecipe);


module.exports = router;
