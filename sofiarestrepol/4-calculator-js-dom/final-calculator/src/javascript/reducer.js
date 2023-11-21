
export const initState = { currentOp, operation, previousOp };

const [state, dispatch] = useReducer(reducer, {})
  currentOp = state.currentOp;
  previousOp = state.previousOp;
  operation = state.operation;
  //currentOp, previousOp, operation representan los estados
  //dispatch para actualizar el estado
  //el objeto vacio representa el estado inicial