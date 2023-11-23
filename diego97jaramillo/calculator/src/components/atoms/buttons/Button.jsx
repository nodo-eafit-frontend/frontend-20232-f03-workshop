import React from 'react';
import './Button.scss';
import PropTypes from "prop-types";

const namespace = 'button';

const Button = ({className, text, onClick}) => {
  return <button className={`${namespace} ${className}`} onClick={() => onClick(text)}>{text}</button>
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
