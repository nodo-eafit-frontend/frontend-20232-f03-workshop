const express = require("express"); 
const router = express.Router()

const {get_recipe} = require("./recipe/get")
const {post_recipe} = require("./recipe/post")
const {put_recipe} = require("./recipe/put")
const {delete_recipe} = require("./recipe/delete")


router.get("/recipe", get_recipe)
router.post("/recipe", post_recipe)
router.put("/recipe", put_recipe)
router.delete("/recipe", delete_recipe)


module.exports = router;