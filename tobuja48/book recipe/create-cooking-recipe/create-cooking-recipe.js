function getRadioResult(element, name) {
return element.querySelector(`input[name="${name}"]:checked`)?.value;
}


const recipe = {
title: undefined,
peopleAmount: {
 people: undefined,
},
time: undefined,  
cost: undefined,
level: undefined,
comment: undefined,
};


function onSubmit(event) {
event.preventDefault()
const formEl = event.target;

recipe.title = formEl.querySelector('#title-recipe').value;
recipe.comment = formEl.querySelector('textarea[name="comment"]').value;
recipe.time = Number(formEl.querySelector('#time').value);
recipe.title = formEl.querySelector('#title-recipe').value;
recipe.cost = getRadioResult(formEl, 'cost');
recipe.level = formEl.querySelector('#level').value;
recipe.peopleAmount.people = +formEl.querySelector('#people').value;

//validaciones
let validation = {
    isValid: true,
    message: '',
  };

if (recipe.title.length > 16) {
validation.isValid = false;
validation.message = 'El titulo supero el maximo de 16 caracteres';
}


if (!validation.isValid){
    alert ('formulario invalido: ' + validation.message);
} else {
   console.log (recipe)
}
}





    