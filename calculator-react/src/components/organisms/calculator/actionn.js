export const actions = {
    SET_BOARD: (state, newText) => {
        const board = state.board + newText;

        return { ...state, board };
    },
    SET_OPERATION: (state, newOperation) => {
        const operations = [
        { text: '+', type: 'PLUS' },
        { text: '-', type: 'MINUS' },
        ];

        const operation = operations.find(({ text }) => text === newOperation);

        if (operation) {
        return { ...state, operation };
        }

        return { ...state };
    },
    PLUS: (state, { num1, num2 }) => {
        const result = num1 + num2;

        return { ...state, result };
    },
    MINUS: (state, { num1, num2 }) => {
        const result = num1 - num2;

        return { ...state, result };
    },
};

    export const operate = ({ board, operation }, newText, dispatch) => {
    if (operation.type && operation.text && newText === '=') {
        const [leftResult, rightResult] = board.split(operation.text);
        const leftNumber = Number(leftResult);
        const rightNumber = Number(rightResult);
        const payload = {
        num1: leftNumber,
        num2: rightNumber,
    };

        dispatch({ type: operation.type, payload });
    }
};