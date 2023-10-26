
//obtener dificultad
function obtenerResultado(element, name) {
  return element.querySelector(`input[name="${name}"]:checked`)?.value;
};


//primero se define el objeto vacio
const recipe = { //objeto con la info de la receta
  title: undefined, //no hay valor por ahora ent se pone undefined
  portions: undefined,
  time: undefined,
  level: undefined,
  ingredients: undefined,
  steps: undefined,
};

//despues se llena la info
function onSubmit(event) { //when click on submit.. do event
  // event.preventDefault(); //evita que se haga la accion predeterminada
  const formEl = event.target; 

  // validate("#title");

  recipe.title = formEl.querySelector("#title").value;
  recipe.portions = Number(formEl.querySelector("#portions").value);
  recipe.time = Number(formEl.querySelector("#prep-time").value);
  recipe.level = obtenerResultado(formEl, 'level');
  recipe.ingredients = formEl.querySelector("textarea[name='ingredients']").value;
  recipe.steps = formEl.querySelector("textarea[name='steps']").value;

  //duda: diferencia entre innerText y textContent

  // Validaciones
  let validation = {
    isValid: true,
    message: "",
  };


  if (recipe.title.length > 30) {
    validation.isValid = false;
    validation.message = "El titulo excede 20 caracteres";
  } else if (recipe.time > 180) {
    validation.isValid = false;
    validation.message = "El tiempo de preparacion debe ser inferior a 3 horas";
  }  else if (!recipe.level) {
    validation.isValid = false;
    validation.message = "El nivel de dificultad no debe estar vacío";
  }

  if (!validation.isValid) {
    alert(`Formulario Invalido. ${validation.message}`);
    event.preventDefault(); //evita que se haga la accion predeterminada
  } else {
    console.log(recipe);
    event.returnValue;

  }
} // cierra onSubmit




