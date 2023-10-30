const updateRecipe = (req, res) => {
  res.status(200).send({
    message: "updated recipe"
  })
} // method - put - update

module.exports = { updateRecipe } 