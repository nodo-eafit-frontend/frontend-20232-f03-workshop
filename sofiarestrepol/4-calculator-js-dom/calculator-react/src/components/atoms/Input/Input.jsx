import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

const namespace = 'input';

const Input = ({ type, readOnly, value }) => {
  return <input className={namespace} type={type} readOnly={readOnly} value={value} />;
}; //se agrega readonly para solo lec, se pone como un props, y se define su valor en default


Input.defaultProps = { //si no se pone nada en props, se usa esto por defecto (como los argumentos en Py)
  type: 'text',
  value: '', //vacio por defecto
  // readOnly: false,
  readOnly: true,
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
};

export default Input;
