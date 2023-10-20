function getRadioResult(element, name) {
  return element.querySelector(`input[name="${name}"]:checked`)?.value;
}

const recipe = {
  title: undefined,
  peopleAmount: {
    max: undefined,
    min: undefined,
  },
  time: undefined,
  cost: undefined,
  level: undefined,
  steps: undefined,
};

function onSubmit(event) {
  event.preventDefault();
  const formEl = event.target;

  recipe.title = formEl.querySelector("#title-recipe").value;
  recipe.steps = formEl.querySelector('textarea[name="steps"]').value;
  recipe.time = Number(formEl.querySelector("#time-for-cooking").value);
  recipe.cost = getRadioResult(formEl, "cost");
  recipe.level = getRadioResult(formEl, "level");
  recipe.peopleAmount.min = +formEl.querySelector("#min-people").value;
  recipe.peopleAmount.max = +formEl.querySelector("#max-people").value;

  // Validaciones
  let validation = {
    isValid: true,
    message: "",
  };

  if (recipe.title.length > 20) {
    validation.isValid = false;
    validation.message = "El título supero el máximo 20 caracteres";
  }

  if (recipe.peopleAmount.min >= recipe.peopleAmount.max) {
    validation.isValid = false;
    validation.message = "Cantidad de personas inválidas";
  }

  if (!validation.isValid) {
    alert("Formulario inválido: " + validation.message);
  } else {
    console.log(recipe);

    // TODO: Create fetch request to send recipe to server
  }
}
