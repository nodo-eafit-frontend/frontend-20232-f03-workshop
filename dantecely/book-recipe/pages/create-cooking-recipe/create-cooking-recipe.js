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

  recipe.title = formEl.querySelector('#title-recipe').value;
  recipe.steps = formEl.querySelector('textarea[name="steps"]').value;
  recipe.time = Number(formEl.querySelector('#time-for-cooking').value);
  recipe.cost = getRadioResult(formEl, 'cost');
  recipe.level = getRadioResult(formEl, 'level');
  recipe.peopleAmount.min = +formEl.querySelector('#min-people').value;
  recipe.peopleAmount.max = +formEl.querySelector('#max-people').value;

  // Condicionales

  console.log(recipe);
}
