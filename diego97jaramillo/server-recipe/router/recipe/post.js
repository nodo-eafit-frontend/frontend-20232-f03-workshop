const fs = require('fs');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const { RECIPE_PATH } = process.env;


const addRecipe = (req, res) => {
    //al declarar la constante como un objeto lo que hacemos es crear la variable igual a un hijo del req con el mismo nombre.
    const { body: newRecipe } = req;

    console.log(newRecipe);

    fs.readFile(RECIPE_PATH, (err, data) => {
        if (err) {
            const msgError ='Error reading file: ' + err;
            console.error(msgError);
            res.status(400).send(msgError);
        } else {
            const recipes = JSON.parse(data);

            newRecipe.id = uuidv4();

            recipes.push(newRecipe);

            fs.writeFile(RECIPE_PATH, JSON.stringify(recipes), (err) => {
                if (err) {
                  const msgError = "Error writing file: " + err;
                  console.error(msgError);
                  res.status(400).send(msgError);
                }

            res.status(201).send(newRecipe);
        });

        };
    });
};


module.exports = { addRecipe };
