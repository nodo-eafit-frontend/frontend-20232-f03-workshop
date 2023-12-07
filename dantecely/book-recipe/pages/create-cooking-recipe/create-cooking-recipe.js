function getRadioResult(element, name) {
  return element.querySelector(`input[name="${name}"]:checked`)?.value;
}

const constants = {
  MESSAGE_ERROR_GENERIC: "Formulario inválido: ",
  URL_SERVER: "http://localhost:3006/recipe",
  BASE_URL: "http://localhost:3002",
  getPathRecipe: (baseUrl, idRecipe) => `${baseUrl}/recipe/${idRecipe}`,
};

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
  const resultSelector = ".new-recipe > code";

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
    alert(constants.MESSAGE_ERROR_GENERIC + validation.message);
  } else {
    const options = {
      method: "PUT",
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${baseUrl}/recipe`, options)
      .then((raw) => raw.json())
      .then((data) => {
        console.log(data);

        const codeEl = document.querySelector(resultSelector);
        const dataEl = document.createTextNode(JSON.stringify(data, null, 2));

        codeEl.appendChild(dataEl);
      })
      .catch((error) => {
        const messageError = `Error: ${error.message}`;
        console.error(messageError);
        const codeEl = document.querySelector(resultSelector);
        const messageText = document.createTextNode(messageError);

        codeEl.appendChild(messageText);
      });
  }
}

function getRecipes() {
  const responsePromise = fetch(constants.URL_SERVER);
  const rawProimise = responsePromise.then((raw) => raw.json());
  rawProimise.then((data) => {
    console.log(data);

    const codeEl = document.querySelector("section code");
    const dataEl = document.createTextNode(JSON.stringify(data, null, 2));

    codeEl.appendChild(dataEl);
  });
}

function getRecipe(idRecipe) {
  fetch(constants.getPathRecipe(constants.BASE_URL, idRecipe))
    .then((raw) => raw.json())
    .then((data) => {
      console.log(data);

      const codeEl = document.querySelector("section code");
      const dataEl = document.createTextNode(JSON.stringify(data, null, 2));

      codeEl.appendChild(dataEl);
    })
    .catch((error) => {
      const messageError = `Error: ${error.message}`;
      console.error(messageError);
      const sectionEl = document.querySelector("body > section");

      const spanEl = document.createElement("span");
      const messageText = document.createTextNode(messageError);

      spanEl.appendChild(messageText);
      sectionEl.appendChild(spanEl);
    });
}
