
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


//request to server


//Mostrar Recetas
function showRecipes() {
  const promise = fetch("http://localhost:5252/recipe"); //fetch devuelve una promesa
  const rawResponse = promise.then((response) => response.json()); //abre la promesa y entrega la respuesta en formato RAW, y response.json la traduce a json
  rawResponse.then((data) => { //data es el json traducido a objeto cre
    console.log(data);

    const codeEl = document.querySelector("section code"); //selecciona el <code> en el html
    const textNode = document.createTextNode(JSON.stringify(data, null, 2)) //crea un texto , lo vuelve string, y lo organiza 
    
    codeEl.appendChild(textNode); 
  })

}

//la promesa es el sobre de una carta, y para abrir el sobre hay que usar el metodo .then que nos va a devolver una response - esa respuesta es la carta

//se convierte en json para facilitar la comunicacion entre servidores, y luego se re convierte a objeto para la lectura 
//cors define quienes pueden acceder a x recurso web


