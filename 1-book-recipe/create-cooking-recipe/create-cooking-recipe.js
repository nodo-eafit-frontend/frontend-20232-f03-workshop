function onSubmit(event) {
    event.preventDefault();

    const title = document.getElementById('title-recipe').value;
    const minPeople = document.getElementById('min-people').value;
    const maxPeople = document.getElementById('max-people').value;
    const timePreparation = document.getElementById('time-preparation').value;
    const cost = document.querySelector('input[name="Cost"]:checked');
    const difficulty = document.querySelector('input[name="level"]:checked');
    const steps = document.querySelector('textarea[name="steps"]').value;

    // Validaciones
    if (!title) {
        alert('Por favor, ingresa un título para la receta.');
        return;
    }

    if (!minPeople || !maxPeople || !timePreparation || !cost || !difficulty || !steps) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (parseInt(minPeople) > parseInt(maxPeople)) {
        alert('El número mínimo de personas no puede ser mayor que el número máximo.');
        return;
    }
    
    if (steps.length > 100) {
        alert('Los pasos no pueden superar los 100 caracteres.');
        return;
    }

    alert('¡Receta creada exitosamente!');
    window.location.href = 'http://127.0.0.1:3000/1-book-recipe/1-cooking-recipe-html-css/cooking-recipe.html';
    document.getElementById('recipe_form').reset();
}


function getRecipes() {
    const responsePromise = fetch(constants.URL_SERVER);
    const rawProimise = responsePromise.then((raw) => raw.json());
    rawProimise.then((data) => {
      console.log(data);
  
      const codeEl = document.querySelector('section code');
      const dataEl = document.createTextNode(JSON.stringify(data, null, 2));
  
      codeEl.appendChild(dataEl);
    });
  }