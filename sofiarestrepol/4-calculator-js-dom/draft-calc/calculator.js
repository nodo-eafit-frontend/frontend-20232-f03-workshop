const buttons = document.querySelectorAll('button');
const display = document.querySelector('.screen');

let calculation = [];
//usamos let porque eventualmente vamos a clear the variable 
let accumulativeCalculation 

function calculate(button) {
  const value = button.textContent; //para obtener solo el valor y no todo el elemento (button, clase, id)
  
  if (value === "AC") {
    calculation = [];
    display.textContent = "0";
  } else if (value === "=") {
    display.textContent = eval(accumulativeCalculation); //evalua el string y hace las acciones necesarias
    //:note: NUNCA usar eval en el dia a dia porque ejecutar javascript desde un string es un riesgo de seguridad!!!
  } else {
    calculation.push(value); //agregar el valor del boton a la lista calculation
    accumulativeCalculation = calculation.join(''); //join para unir todos los elementos del array en una sola cadena
    display.textContent = accumulativeCalculation; //no lo muestra como lista sino como string
  }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
//a cada boton se le agrega un event listener, y cuando se haga click realizar la accion