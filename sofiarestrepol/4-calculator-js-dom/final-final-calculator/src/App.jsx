import { useReducer } from 'react';
import '../sass/App.scss';
import Calculator from './Calculator';
import { ACTIONS } from './actions';






// App.jsx


const initialState = {
  currentOp: '',
  previousOp: '',
  operation: null,
  result: null,
};

function reducer(state, action) {
  let result;
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOp: state.currentOp + action.payload.digit,
      };
    case ACTIONS.CHOOSE_OPERATION:
      return {
        ...state,
        previousOp: state.currentOp,
        currentOp: '',
        operation: action.payload.operation,
      };
    case ACTIONS.CLEAR:
      // Borrar el input actual
      return {
        ...state,
        currentOp: '',
      };
    case ACTIONS.CALCULATE:
      // Calcular el resultado en función del operador
      switch (state.operation) {
        case '+':
          result = parseFloat(state.previousOp) + parseFloat(state.currentOp);
          break;
        case '-':
          result = parseFloat(state.previousOp) - parseFloat(state.currentOp);
          break;
        case '*':
          result = parseFloat(state.previousOp) * parseFloat(state.currentOp);
          break;
        case '/':
          result = parseFloat(state.previousOp) / parseFloat(state.currentOp);
          break;
        default:
          result = null;
      }
      return {
        ...state,
        result,
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="calculator">
      <Calculator state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;














// function reducer (state, {type, payload}) {
//   switch(type) {
//     case ACTIONS.ADD_DIGIT: 
//       return {
//         ...state,
//         currentOp: `${currentOp || ""}${payload.digit}`, //al currentOp se le agrega el digit que se input through payload, y se le manda a reducer
//       } //if null , then currentOp is an empty  string
//   }

// } //2  - definir la funcion reducer que toma un state y un action 
// //action se divide en type y payload - para reconocer el tipo de accion, y los parametros



// function App() {

  

//   const [{previousOp, currentOp, operation}, dispatch] = useReducer(reducer, {}) //1 - declarar state y dispatch = useReducer, que toma la funcion reducer
//   //el {} objeto vacio es el estado inicial
//   //previousOp, currentOp y operation son los estados

//   return (
//     <div className="calculator">
//       <div className="screen">
//         <div className="previous-op">{previousOp} {operation}123 </div>
//         <div className="current-op">{currentOp}123</div>
//       </div>
//       <div className="keyboard">
//         <DigitButton digit="÷" dispatch={dispatch} />
//         <button>←</button>
//         <button>%</button>
//         <button>÷</button>
//         <button>7</button>
//         <button>8</button>
//         <button>9</button>
//         <button>*</button>
//         <button>4</button>
//         <button>5</button>
//         <button>6</button>
//         <button>-</button>
//         <button>1</button>
//         <button>2</button>
//         <button>3</button>
//         <button>+</button>
//         <button>0</button>
//         <button>.</button>
//         <button>=</button>
//         <button>OK</button>
//       </div>
//     </div>
//   )
// }

// export default App
