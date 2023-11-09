recipe = {
    title: "Kiwi Jam"
}

//callback
const get_recipe = (req, res) =>{
    res.status(200).send(recipe);
}

module.exports = { get_recipe };