//UPDATE

const updateRecipe = (req, res) => {
  res.status(200).send({
    message: "updated recipe"
  })
  console.log("updated recipe");
} // method - put - update

module.exports = { updateRecipe } 







