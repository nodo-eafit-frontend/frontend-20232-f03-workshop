
// import PropTypes from "prop-types";
import { ACTIONS } from "./App";


export default function DigitButton({ dispatch, digit }) { //dispatch permite call the reducer function
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })} //onClick se inicia dispatch, y se le pasa el tipo de accion y el digito a a traves de payload
    >
      {digit}
    </button>
  )
}   

// DigitButton.propTypes = {
//   dispatch: PropTypes.func.isRequired, // Define 'dispatch' como una función requerida
//   digit: PropTypes.string.isRequired,   
// };