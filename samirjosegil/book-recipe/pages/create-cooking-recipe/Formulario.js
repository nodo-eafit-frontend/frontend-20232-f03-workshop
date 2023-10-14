    var title = document.getElementById("recipe-name");
    var ingredients = document.getElementById("ingredients");
    var minPeople = document.querySelector("#min-people");
    var maxPeople = document.querySelector("#max-people");
    var steps = document.getElementById("steps");
    var form = document.getElementById("form");
  
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
  
      // Condicionales
  
      console.log(recipe);
    }