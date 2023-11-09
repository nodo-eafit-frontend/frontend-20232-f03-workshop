import React from 'react';
import './Button.scss';

const namespace = 'button';

const Button = ({className, text}) => {
  return <button className={`${namespace} ${className}`}>{text}</button>
};

export default Button;
