
import { useReducer } from 'react';
import { ACTIONS } from '../../javascript/actions.js';
import Keyboard from "../keyboard/Keyboard.jsx";
import Screen from "../screen/Screen.jsx";
import './calculator.scss';
// import DigitButton from '../../javascript/digitButton.jsx';

const namespace = "calculator"; //para darle nombre a un elemento y reutilizarlo. aqui es donde se define la clase principal, la que se usa despues para styles

let currentOp, previousOp, operation;
export { currentOp, operation, previousOp };


function reducer(state, {type, payload}) {
  switch(type) {
    case ACTIONS.ADD_DIGIT: 
      return {
        ...state,
        currentOp: `${currentOp || ""}${payload.digit}`, 
      } //payload digit es lo que le vamos a dar a reducer 
      //if currentOp no es null, se actualiza currentOp con el digit del payload, si es null se pone un empty string 
  }

}
//action se divide en dos: type y payload, para definir el tipo de acciones y payload los parametros




const Calculator = () => {

  const [state, dispatch] = useReducer(reducer, {})
  currentOp = state.currentOp;
  previousOp = state.previousOp;
  operation = state.operation;
  //currentOp, previousOp, operation representan los estados
  //dispatch para actualizar el estado
  //el objeto vacio representa el estado inicial

  return (
    <section className={namespace}>
      <Screen />
      <Keyboard dispatch={dispatch} />
    </section>
  )
};

export default Calculator;