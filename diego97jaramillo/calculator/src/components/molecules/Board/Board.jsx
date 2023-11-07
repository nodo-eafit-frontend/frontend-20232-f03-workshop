import React from 'react';
import Input from '../../atoms/input/input';
import Result from '../../atoms/result/result';

const namespace = 'board';

const Board = () => {
  return (
    <section classname={namespace}>
        <Input />
        <Result />
    </section>
  )
}

export default Board
