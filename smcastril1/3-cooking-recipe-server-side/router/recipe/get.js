const fs = require('fs');
const { RECIPE_PATH } = process.env;
require("dotenv").config();


//callback
const get_recipe = (req, res) =>{

    fs.readFile(RECIPE_PATH, (err, data)=>{
        if(err){
            const msg_error = 'Error reading the file: '+err;
            console.console.error(msg_error);
            res.status(400).send(msg_error);
        }else{
            const my_recipe = JSON.parse(data); // Lo convierte a un objeto  
            res.status(200).send(my_recipe)
        }
    })
    
      

    // res.send({"mensaje":"I am a recipe :)", recipe});
}

module.exports = { get_recipe };