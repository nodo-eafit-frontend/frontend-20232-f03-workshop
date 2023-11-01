import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../atoms/Input/Input';
import Result from '../../atoms/Result/Result';
import './styles.scss';

const namespace = 'board';

const Board = ({ board, result }) => {
  return (
    <section className={namespace}>
      <Input value={board} readOnly={true} />
      <Result text={result} />
    </section>
  );
};

Board.propTypes = {
  operations: PropTypes.string,
};

export default Board;
