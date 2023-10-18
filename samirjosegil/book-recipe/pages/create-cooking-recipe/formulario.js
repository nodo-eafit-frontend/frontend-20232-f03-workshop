var title = document.getElementById("recipe-name");
var ingredients = document.getElementById("ingredients");
var minPeople = document.querySelector("#min-people");
var maxPeople = document.querySelector("#max-people");
var steps = document.getElementById("steps");
var form = document.getElementById("form");


title.addEventListener("input", function () {
  if (title.value.length > 20) {
    title.setCustomValidity("No se puede exceder los 20 caracteres.");
  } else {
    title.setCustomValidity("");
  }
});

 minPeople.addEventListener("input", function () {
  if (parseInt(minPeople.value) > parseInt(maxPeople.value)) {
    minPeople.setCustomValidity("El valor mínimo no puede ser mayor al máximo.");
  } else {
    minPeople.setCustomValidity("");
  }
});

maxPeople.addEventListener("input", function () {
  if (parseInt(maxPeople.value) < parseInt(minPeople.value)) {
    maxPeople.setCustomValidity("El valor máximo no puede ser menor al mínimo.");
  } else {
    maxPeople.setCustomValidity("");
  }
});


form.addEventListener("submit", handleSubmit);
  
function getRadioValue(name) {
  const radioElements = document.getElementsByName(name);
  
  for (const radio of radioElements) {
    if (radio.checked) {
      return radio.value;
    }
  }
  
return null;
}
  
function handleSubmit(event) {
  event.preventDefault();

  var recipe = {
    title: title.value,
    peopleAmount: {
      min: minPeople.value,
      max: maxPeople.value,
    },
    cost: getRadioValue('cost'),
    level: getRadioValue('level'),
    steps: steps.value,
  };
  
console.log(recipe);
}