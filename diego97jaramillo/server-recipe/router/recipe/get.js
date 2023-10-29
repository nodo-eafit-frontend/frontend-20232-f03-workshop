const recipe = {
    category: 'Postres',
    title: 'Tarta de Manzana',
    firstIngredient: 'Manzanas',
    secondIngredient: 'Harina',
    thirdIngredient: 'Azúcar',
    fourthIngredient: 'Huevos',
    fifthIngredient: 'Levadura',
    sixthIngredient: 'Canela',
    numberPeople: {
        max: 8,
        min: 6,
    },
    cookingTime: '45 minutos',
    level: 'Fácil',
    cost: 'Económico',
    steps: [
        'Pelar y cortar las manzanas en rodajas finas.',
        'En un tazón grande, mezclar la harina, el azúcar, los huevos y la levadura.',
        'Agregar las rodajas de manzana a la mezcla y añadir canela al gusto.',
        'Verter la mezcla en un molde para tarta y hornear a 180°C durante 35-40 minutos.',
        'Dejar enfriar antes de servir. ¡Disfruta de tu deliciosa tarta de manzana!'
    ],
    tips: 'Puedes servir la tarta de manzana con una bola de helado de vainilla para un toque extra delicioso.'
};

const callback = (req, res) => {
    res.send (recipe);
};

app.get('/recipe', callback);
