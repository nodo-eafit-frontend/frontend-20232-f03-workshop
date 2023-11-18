import { useContext } from 'react';
import PropTypes from 'prop-types';

import Input from '../../atoms/Input/Input';
import Result from '../../atoms/Result/Result';
import './styles.scss';
import { CalculatorContext } from '../../../context/CalculatorProvider';

const namespace = 'board';

const Board = () => {
    const { counter, state } = useContext(CalculatorContext);

    return (
    <section className={namespace}>
        <Result text={`Counter from context: ${counter}`} />
        <br />
        <Input value={state.board} readOnly={true} />
        <Result text={state.result} />
    </section>
    );
};

Board.propTypes = {
    operations: PropTypes.string,
};

export default Board;