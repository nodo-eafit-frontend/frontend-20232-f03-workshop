
const express = require("express");
const router = express.Router();

const { getRecipes } = require("./recipe/get");
const { updateRecipes } = require("./recipe/post");
const { addRecipes } = require("./recipe/put");
const { removeRecipes } = require("./recipe/delete");

router.get("/recipe", getRecipes);
router.post("/recipe", updateRecipes);
router.put("/recipe", addRecipes);
router.delete("/recipe", removeRecipes);

module.exports = router;
