const deleteRecipe = (req, res) => {
  res.status(200).send({
    message: "deleted recipe"
  })
}

module.exports = {deleteRecipe};