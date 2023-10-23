
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
  pasos: undefined,
};

//despues se llena la info
function onSubmit(event) { //when click on submit.. do event
  event.preventDefault(); //evita que se haga la accion predeterminada
  const formEl = event.target; 

  validate("#title");

  recipe.title = formEl.querySelector("#title").value;
  recipe.portions = Number(formEl.querySelector("#portions").value);
  recipe.time = Number(formEl.querySelector("#prep-time").value);
  recipe.level = obtenerResultado(formEl, 'level');
  recipe.steps = formEl.querySelector("textarea[name='steps']").value;

  //Validaciones
  // let validation = {
  //   isValid: true,
  //   message: "",
  // };

  let isValid = true;
  let message = "";

  if (recipe.title.length > 20) {
    isValid = false;
    message = "El titulo excede 20 caracteres";
  } else if (recipe.portions < 1) {
    isValid = false;
    message = "El numero de porciones debe ser superior o igual a 1";
  } else if (recipe.time > 180) {
    isValid = false;
    message = "El tiempo de preparacion debe ser inferior a 3 horas";
  } 

  if (!isValid) {
    alert(`Formulario Invalido. ${message}`);
  } else {
    console.log(recipe);
  }
  //duda: de que sirve poner el mensaje en las alertas si en el html ya definimos los limites

} // cierra onSubmit



// switch () {
//   case value:
    
//     break;

//   default:
//     break;
// }

//DUDA:
//cuando se definen variables ( let var = x) y cuando no (var = x)

const input = document.querySelector("#title");
input.setCustomValidity("hello");

function validate(selector) {
  const input =document.querySelector(selector);
  const validityState = input.validity;

  input.reportValidity();
}
