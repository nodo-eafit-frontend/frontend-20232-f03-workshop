
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
  } else if (recipe.portions < 1) {
    validation.isValid = false;
    validation.message = "El numero de porciones debe ser superior o igual a 1";
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



// switch () {
//   case value:
    
//     break;

//   default:
//     break;
// }

//DUDA:
//cuando se definen variables ( let var = x) y cuando no (var = x)

// const titleInput = document.querySelector("#title");
// titleInput.setCustomValidity("Escribe el titulo de la receta");


// function validate(selector) {
//   const titleInput =document.querySelector(selector);
//   const validityState = titleInput.validity;
//   titleInput.reportValidity();
// };

function getRecipes() {
  const responsePromise = fetch("http://localhost:3002/recipe");
  
  const rawPromise = responsePromise.then((raw) => raw.json()); //es la info raw que nos llega. no interpretable. se pasa a json
  rawPromise.then((data) => {
    console.log(data);
  })


}

function getRecipe(idRecipe) {
  fetch(`http://localhost:3002/recipe/${idRecipe}`)
    .then((raw) => raw.json()) //convertir raw a json
    .then((data) => {
      console.log(data);

      const codeEl = document.querySelector("section code");
      const dataEl = document.createTextNode(JSON.stringify(data, null, 2)); //para que se muestre como un objeto ordenado y no como una lista 

      codeEl.appendChild(dataEl);
    });
  }
