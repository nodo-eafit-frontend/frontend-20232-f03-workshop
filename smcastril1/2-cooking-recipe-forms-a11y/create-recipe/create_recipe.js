//alert("Let's create our proper cooking recipe!!! ");

// // TOMAR ELEMENTOS DE EL HTML -----------------------------------------------------------
// const element =  document.querySelectorAll("label");
// console.log(element[0].innerText)

// // RECUPERAR INPUTS DE EL FORM ----------------------------------------------------------
// const title = document.querySelector('#title-recipe').value;
// const cost_element = document.querySelector("#cost_element");
// console.log(title);

// const elemento = document.querySelector("fieldset")
// console.log(elemento.children[1]);

// class Recipe{
//     constructor(){

//     }
// }

// class Recipe {
// constructor() {
//     this.title = undefined;
//     this.peopleAmount = {
//         max: undefined,
//         min: undefined,
//     };
//     this.time = undefined;
//     this.cost = undefined;
//     this.type = undefined;
//     this.level = undefined;
//     this.steps = undefined;
// }

//     set_radio_button_attribute(element_name){

//         const input_element = document.querySelector(`input[name=${element_name}]:checked`);
//         this[element_name] = input_element.value;
//     }

//     set_attribute(attribute, element_id) {
//         this[attribute] = document.querySelector(element_id).value;
//     }

// }

// const my_recipe = new Recipe();
// my_recipe.set_attribute("title", "#title-recipe");
// my_recipe.set_attribute("time", "#time-for-cooking");
// my_recipe.set_radio_button_attribute("cost");
// my_recipe.set_radio_button_attribute("type");
// my_recipe.set_radio_button_attribute("level");
// my_recipe.set_attribute("steps", "#steps");

// console.log(my_recipe);

// ------------------------------------------------------------------------------

let data;

function onSubmit(event) {
  let isValid = true;
  let msg = '';

  event.preventDefault(); //No redirecciona
  data = Object.fromEntries(new FormData(event.target));
  console.log(data);

  //VALIDACIONES
  if (data.title.length > 20) {
    isValid = false;
    msg += 'ERROR: Title too long.';
  }

  if (data.min_people >= data.max_people) {
    console.log('ENTRÉ');
    isValid = false;
    msg += 'ERROR: The minimum of people has to be shorter than the maximum.';

    const fieldsetEl = document.querySelector('fieldset.people-amount');
    const messageErrorEl = document.createElement('span');
    messageErrorEl.className = 'error-message';
    messageErrorEl.textContent = msg;

    fieldsetEl.appendChild(messageErrorEl);
  }

  if (!isValid) {
    alert(msg);
  }
}
