import React from 'react';
import './Button.scss';

const namespace = 'button';

const Button = ({className, text, onClick}) => {
  return <button className={`${namespace} ${className}`} onClick={() => onClick(text)}>{text}</button>
};

export default Button;
