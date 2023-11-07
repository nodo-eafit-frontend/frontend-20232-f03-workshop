
import PropTypes from "prop-types";
import { ACTIONS } from "./actions";


export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}   

DigitButton.propTypes = {
  dispatch: PropTypes.func.isRequired, // Define 'dispatch' como una función requerida
  digit: PropTypes.string.isRequired,   // Define 'digit' como una cadena requerida (o el tipo correcto)
};