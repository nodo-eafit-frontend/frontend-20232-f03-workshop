const baseUrl = 'http://localhost:3000';

// Se crea esta función para recoger los datos de todos los rabio-buttons que puedan haber en el formulario
function getRadioResult(element, name) {
    return element.querySelector(`input[name="${name}"]:checked`)?.value;
}

// se crea la funcion para recoger todos los ingredientes y no tener que hacer esto para cada linea, simplemente se llama la función, la ocasiones
// que lo necesitemos
function getIngredients(formEvent, idString) {
    return formEvent.querySelector(`${idString}`).value;
}

/* function validate(inputID) {
  const input = document.getElementById(inputID);
  const validityState = input.validity;

  if (validityState.valueMissing) {
    input.setCustomValidity("You gotta fill this out, yo!");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("We need a higher number!");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("That's too high!");
  } else {
    input.setCustomValidity("");
  }

  input.reportValidity();
} */


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
    event.preventDefault();
    const formEl = event.target;

/*     validate('dish-category'); */

    recipe.title = formEl.querySelector('#dish-title').value;
    recipe.category = formEl.querySelector('#dish-category').value;
    recipe.firstIngredient = formEl.querySelector('#primer-ingrediente').value;


    //acá estamos utilizando una función para traer valores según el id especificado, ya que se repite para todos los ingredientes.
    recipe.secondIngredient = getIngredients(formEl, '#segundo-ingrediente');
    // acá es otra forma de buscar los elementos pero sin ir directamente al id sino buscando por las capas del html, esto lo permite
    // la propiedad children cuando el querySelector te despliega una lista de tags.
    recipe.thirdIngredient = formEl.querySelector('.ingredients').children[8].value;
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

    let validation = {
        isValid: true,
        message: '',
    }

    if (recipe.category.length > 15) {

        validation.isValid = false;
        validation.message = 'la categoria está muy larga, por favor revisarlo y resumirlo';
    } else if (recipe.category.length < 5) {
        validation.isValid = false;
        validation.message = 'la categoria es muy cortica, revisa que si lo hayas escrito bien'
    }

    if (recipe.title.length > 35) {

        validation.isValid = false;
        validation.message = 'el titulo es más largo que 25 caracteres, por favor escribalo más cortico';
    }

    if (recipe.numberPeople.min > recipe.numberPeople.max) {
        validation.isValid = false;
        validation.message = 'por favor chequear que el numero de min y max sigan la siguiente logica:  el minimo siempre debe ser menor que el maximo';
    }

    if (recipe.firstIngredient.length > 30) {
        validation.isValid = false;
        validation.message = 'por favor revisa que solo hayas puesto el primer ingrediente, si es así resumelo un poco';
    }

    if (recipe.secondIngredient.length > 30) {
        validation.isValid = false;
        validation.message = 'por favor revisa que solo hayas puesto el segundo ingrediente, si es así resumelo un poco';
    }

    if (recipe.thirdIngredient.length > 30) {
        validation.isValid = false;
        validation.message = 'por favor revisa que solo hayas puesto el tercer ingrediente, si es así resumelo un poco';
    }

    if (recipe.fourthIngredient.length > 30) {
        validation.isValid = false;
        validation.message = 'por favor revisa que solo hayas puesto el cuarto ingrediente, si es así resumelo un poco';
    }

    if (recipe.fifthIngredient.length > 30) {
        validation.isValid = false;
        validation.message = 'por favor revisa que solo hayas puesto el quinto ingrediente, si es así resumelo un poco';
    }

    if (recipe.sixthIngredient.length > 30) {
        validation.isValid = false;
        validation.message = 'por favor revisa que solo hayas puesto el sexto ingrediente, si es así resumelo un poco';
    }

    if (recipe.level === undefined) {
        validation.isValid = false;
        validation.message = 'por favor indica que nivel de dificultad es la receta';
    }

    if (recipe.cost === undefined) {
        validation.isValid = false;
        validation.message = 'por favor indica cual es el costo';
    }

    if (validation.isValid === true) {
        alert('el formulario se ha llenado correctamente');
    }   else {
        alert(validation.message)
    }


    console.log(recipe)


}


function getRecipes() {
    const recipePromise = fetch(`${baseUrl}/recipe`);
    rawPromise = recipePromise.then((raw) => raw.json());
    rawPromise.then((data) => {
        console.log(data)

        const codeEl = document.querySelector('section > code');
        const TextEl = document.createTextNode(JSON.stringify(data, null, 2));

        codeEl.appendChild(TextEl);
    });
}

function getRecipe(idRecipe) {
    const recipePromise = fetch(`${baseUrl}/recipe/${idRecipe}`);

    const rawPromise = recipePromise.then((raw) => raw.json());

    rawPromise.then((data) => {

        console.log(data)

        const codeEl = document.querySelector("section > code");
        const dataEl = document.createTextNode(JSON.stringify(data, null, 2));

        codeEl.appendChild(dataEl);
    }).catch((error) => {
        const messageError = `Error: ${error.message}`;
        console.error(messageError);
        const sectionEl = document.querySelector('body > section');
        const spanEl = document.createElement('span');
        const messageText = document.createTextNode(messageError);

        spanEl.appendChild(messageText);
        sectionEl.appendChild(spanEl);
    })
}
