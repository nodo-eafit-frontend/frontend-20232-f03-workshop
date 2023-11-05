import { useReducer } from 'react';
import Keyboard from "../molecules/Keyboard/Keyboard.jsx";
import Screen from "../molecules/Screen/Screen.jsx";
import { operate } from './actions';
import { initState, reducer } from './reducer';
import './styles.scss';



const namespace = "calculator"; //para darle nombre a un elemento y reutilizarlo. aqui es donde se define la clase principal, la que se usa despues para styles

const Calculator = () => {
  //section 1: propiedades y hooks
  const [state, dispatch] = useReducer(reducer, initState);

  //section 2: declaracion de funciones, ejecucion de hooks (useState)
  const handlerButton = (newText) => {
    operate(state, newText, dispatch);
    dispatch({ type: 'SET_OPERATION', payload: newText });
    dispatch({ type: 'SET_SCREEN', payload: newText });
  };


  return (
    <section className={namespace}>
      <span>Operation Type: {state.operationType}</span>
      <Screen screen={state.screen} result={state.result} />
      <Keyboard onClick={handlerButton} />
    </section>
  )
};

export default Calculator;

