import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../atoms/Input/Input.jsx';
import Result from '../../atoms/Result/Result.jsx';
import './styles.scss';

const namespace = 'screen';

const Screen = ({ operations }) => {
  return (
    <section className={namespace}>
      <Input value={operations} readOnly={true} />
      <Result />
    </section>
  );
};

Screen.propTypes = {
operations: PropTypes.string,
};


export default Screen