const express = require("express");
const router = express.Router();

const { get_recipe, get_recipe_by_id } = require("./recipe/get");
const { post_recipe } = require("./recipe/post");
const { add_recipe } = require("./recipe/put");
const { delete_recipe } = require("./recipe/delete");

router.get("/recipe", get_recipe);
router.get("/recipe/:id", get_recipe_by_id);
router.post("/recipe", post_recipe);
router.put("/recipe", add_recipe);
router.delete("/recipe", delete_recipe);

module.exports = router;
