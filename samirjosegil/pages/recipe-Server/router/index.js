const express = require('express');
const router = express.Router();
const { readRecipe } = require('./api/get');
const { createRecipe } = require('./api/post');
const { updateRecipe } = require('./api/put');
const { deleteRecipe } = require('./api/delete');

router.get('/:year/:month', readRecipe);
router.post('/', createRecipe);
router.put('/', updateRecipe);
router.delete('/', deleteRecipe);

module.exports = router;