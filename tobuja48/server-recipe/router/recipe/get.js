const fs = require('fs');

const recipe = {
    title: 'atun encebollado',
    peopleAmount: {
        people: 4,
    },
    time: '30 minutos de preparación',
    cost: '$20',
    level: 'Intermedio',
    comment: 'Una deliciosa receta de atun encebollado maridado con hierbas frescas, perfecto para una comida al aire libre en familia.',
};


//middleware
const getRecipes = (File, res) => {

    //operacion con la base de datos
    fs.readFile('./database/recipes.json', (err, data) => {
        if (err) {
            const msgError = 'Error reading file: ' + err;
            console.error(msgError);
            res.status(400).send(msgError);
        }else{
            const recipes = JSON.parse(data);

            res.status(200).send(recipes);
        }
        });
};


module.exports = {getRecipes};

