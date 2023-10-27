import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../atoms/Input/Input';
import Result from '../../atoms/Result/Result';
import './styles.scss';

const namespace = 'board';

const Board = ({ operations }) => {
  return (
    <section className={namespace}>
      <Input value={operations} readOnly={true} />
      <Result />
    </section>
  );
};

Board.propTypes = {
  operations: PropTypes.string,
};

export default Board;
