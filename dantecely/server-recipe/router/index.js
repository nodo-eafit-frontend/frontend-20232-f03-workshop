const express = require("express");
const router = express.Router();
const { getRecipes, getRecipe } = require("./recipe/get");
const { updateRecipe } = require("./recipe/post");
const { addRecipe } = require("./recipe/put");
const { removeRecipes } = require("./recipe/delete");

router.get("/recipe", getRecipes);
router.get("/recipe/:id", getRecipe);

router.post("/recipe", updateRecipe);

router.put("/recipe", addRecipe);

router.delete("/recipe", removeRecipes);

module.exports = router;
