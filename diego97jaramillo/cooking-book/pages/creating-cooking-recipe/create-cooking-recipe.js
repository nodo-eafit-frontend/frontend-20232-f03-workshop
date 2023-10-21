
// Se crea esta función para recoger los datos de todos los rabio-buttons que puedan haber en el formulario
function getRadioResult(element, name) {
    return element.querySelector(`input[name="${name}"]:checked`)?.value;
}

// se crea la funcion para recoger todos los ingredientes y no tener que hacer esto para cada linea, simplemente se llama la función, la ocasiones
// que lo necesitemos
function getIngredients(formEvent, idString) {
    return formEvent.querySelector(`${idString}`).value;
}

let recipe = {
    category: '',
    title: '',
    firstIngredient: undefined,
    secondIngredient: undefined,
    thirdIngredient: undefined,
    fourthIngredient: undefined,
    fifthIngredient: undefined,
    sixthIngredient: undefined,
    numberPeople: {
        max: undefined,
        min: undefined,
    },
    cookingTime: undefined,
    level: undefined,
    cost: undefined,
    steps: undefined,
    tips: undefined,
}

// esta función es la que recoge toda la información del formulario y se recoge mediante la variable event.
function onSubmit(event) {
    event.preventDefault()
    const formEl = event.target

    recipe.title = formEl.querySelector('#dish-title').value;
    recipe.category = formEl.querySelector('#dish-category').value;
    recipe.firstIngredient = formEl.querySelector('#primer-ingrediente').value;


    //acá estamos utilizando una función para traer valores según el id especificado, ya que se repite para todos los ingredientes.
    recipe.secondIngredient = getIngredients(formEl, '#segundo-ingrediente');
    // acá es otra forma de buscar los elementos pero sin ir directamente al id sino buscando por las capas del html, esto lo permite
    // la propiedad children cuando el querySelector te despliega una lista de tags.
    recipe.thirdIngredient = formEl.querySelector('fieldset').children[11].value;
    recipe.fourthIngredient = getIngredients(formEl, '#cuarto-ingrediente');
    recipe.fifthIngredient = getIngredients(formEl, '#quinto-ingrediente');
    recipe.sixthIngredient = getIngredients(formEl, '#sexto-ingrediente');
    recipe.cost = getRadioResult(formEl, 'level-cost');
    recipe.level = getRadioResult(formEl, 'level-dificulty');
    //como number es una funcion, si no se escribe como está entonces el browser no va a reconocer lo que queremos hacer.
    recipe.numberPeople.min = Number(formEl.querySelector('#min-num-people').value);
    recipe.numberPeople.max = Number(formEl.querySelector('input[id="max-num-people"]').value);
    recipe.cookingTime = Number(formEl.querySelector('#cooking-time').value);
    recipe.steps = formEl.querySelector('#steps').value;
    recipe.tips = formEl.querySelector('#tips').value;

    console.log(recipe)
}


